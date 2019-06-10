import { Invalid_argument } from '../../general-exception/build/internal/caller_fault/invalid_argument'
import { Constraint } from './constraint'

it('validate', async () => {
  const row = new Constraint({
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

  expect(row.validate(['banned'], 'ok')).toBeTruthy()
  expect(() => row.validate(['banned'], 'not_exist')).toThrow(Invalid_argument)

  const conflict$ = row.key_has_conflict(['banned'], 'ok')
  expect(conflict$).toHaveLength(1)
  expect(conflict$[0]).toBe('banned')
})
