import { Invalid_argument } from '../../general-exception/build/internal/caller_fault/invalid_argument'
import { Constraint } from './constraint'

let row

beforeEach(() => {
  row = new Constraint({
    child$: {
      ok: {
        child$: null,
        conflict$: ['banned'],
      },
      suspend: {
        child$: null,
        conflict$: ['ok'],
      },
      banned: {
        child$: null,
        conflict$: [],
      },
    },
  })

})

it('validate', async () => {
  expect(row.validate(['banned'], 'ok')).toBeTruthy()
  expect(() => row.validate(['banned'], 'not_exist')).toThrow(Invalid_argument)

  const conflict$ = row.key_has_conflict(['banned'], 'ok')
  expect(conflict$).toHaveLength(1)
  expect(conflict$[0]).toBe('banned')
})

it('find_many', async () => {
  const result = row.find_many(['ok', 'banned'])
  expect(result.length).toBe(2)
  expect(result.find(it => it.name === 'ok')).toBeTruthy()
  expect(result.find(it => it.name === 'banned')).toBeTruthy()
})
