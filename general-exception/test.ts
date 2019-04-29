import { Invalid_State_Exception } from './external/callee_fault/Invalid_State_Exception'

it('should throw exception', async () => {
  throw new Invalid_State_Exception('yo')
})
