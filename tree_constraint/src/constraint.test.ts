import { Invalid_argument } from '../../general-exception/build/internal/caller_fault/invalid_argument'
import { Constraint } from './constraint'

it('validate', async () => {
  const row = new Constraint({
    child$: {
      ok: {
        child$: null,
        conflict$: ['banned'],
      },
      banned: {
        child$: null,
        conflict$: ['ok'],
      },
    },
  })

  expect(row.validate('ok')).toBeTruthy()
  expect(() => row.validate('not_exist')).toThrow(Invalid_argument)
})
