import { Invalid_State_Exception } from './external/callee_fault/Invalid_State_Exception'
import { External_Exception } from './external/External_Exception'

// throw new External_Exception('yo')
throw new Invalid_State_Exception('yo')
