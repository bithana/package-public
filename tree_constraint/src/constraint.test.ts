import { Invalid_argument } from '../../general-exception/build/internal/caller_fault/invalid_argument'
import { dump } from '../../print/src'
import { Constraint } from './constraint'
import { Tree } from './tree'

let row

beforeEach(() => {
  row = new Constraint({
    child$: {
      ok: {
        child$: {
          ok_a: {
            child$: {
              ok_b: {
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
        child$: {
          banned_a: {
            child$: {
              banned_b: {
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
})
