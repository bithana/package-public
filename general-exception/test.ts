import { Invalid_state_exception } from './external/callee_fault/Invalid_state_exception'

it('should throw exception', async () => {
  expect(() => {throw new Invalid_state_exception('yo')}).toThrow(Invalid_state_exception)
})
