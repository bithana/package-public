import { Invalid_argument } from '@bithana/general-exception/build/internal/caller_fault/invalid_argument'
import { Constraint } from './constraint'
import _ = require('lodash')

let row

beforeEach(() => {
  row = new Constraint({
    child$: {
      ok: {
        a: 'ok_a1',
        b: 'ok_b1',
        child$: {
          ok_a: {
            b: 'ok_b2',
            child$: {
              ok_b: {
                a: 'ok_a3',
                child$: null,
              },
            },
          },
        },
        conflict$: ['banned'],
      },
      suspend: {
        child$: null,
        conflict$: ['ok'],
      },
      banned: {
        a: 'banned_a1',
        b: 'banned_b1',
        child$: {
          banned_a: {
            b: 'banned_b2',
            child$: {
              banned_b: {
                a: 'banned_a3',
                child$: null,
              },
            },
          },
        },
        conflict$: ['ok'],
      },
    },
  })

})

it('validate', async () => {
  expect(row.validate(['banned'], 'ok')).toBeTruthy()
  expect(() => row.validate(['banned'], 'not_exist')).toThrow(Invalid_argument)

  // const conflict$ = row.key_has_conflict(['banned'], 'ok')
  // expect(conflict$).toHaveLength(1)
  // expect(conflict$[0]).toBe('banned')
})

it('find_many', async () => {
  const result = row.find_many(['ok', 'banned'])
  expect(result.length).toBe(2)
  expect(result.find(it => it.name === 'ok')).toBeTruthy()
  expect(result.find(it => it.name === 'banned')).toBeTruthy()
})

it('uniquify', async () => {
  const list = ['ok', 'ok_a', 'something1', 'something2', 'banned']
  row.uniquify(list, 'ok_b')
  expect(list.includes('ok')).toBeFalsy()
  expect(list.includes('ok_a')).toBeFalsy()
  expect(list.includes('something1')).toBeTruthy()
  expect(list.includes('something2')).toBeTruthy()
  expect(list.includes('banned')).toBeTruthy()
})

it('is', async () => {
  const list = ['ok_a', 'ok_b']
  expect(row.is(list, 'ok_a')).toBeTruthy()
  expect(row.is(list, 'ok')).toBeTruthy()
  expect(row.is(list, 'banned')).toBeFalsy()

  expect(row.is(['a', 'b'], 'a')).toBeFalsy()
})

it('up_collect', async () => {
  let r = row.up_collect(['ok_a', 'banned_a'], ['a', 'b'])
  expect(_.difference(r.a, ['ok_a1', 'banned_a1'])).toHaveLength(0)
  expect(_.difference(r.b, ['ok_b1', 'ok_b2', 'banned_b1', 'banned_b2'])).toHaveLength(0)
})
