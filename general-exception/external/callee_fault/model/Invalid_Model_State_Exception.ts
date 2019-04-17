import { Invalid_State_Exception } from '../Invalid_State_Exception'

export class Invalid_Model_State_Exception extends Invalid_State_Exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.set_eid('INVALID_MODEL_STATE')
  }
}
