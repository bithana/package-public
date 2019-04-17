import { External_Exception } from '../External_Exception'

export class Invalid_State_Exception extends External_Exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.set_eid('INVALID_STATE')
  }
}
