import { External_exception } from '../External_exception'

export class Invalid_state_exception extends External_exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    Object.setPrototypeOf(this, Invalid_state_exception.prototype)
    this.eid = 'INVALID_STATE'
  }
}
