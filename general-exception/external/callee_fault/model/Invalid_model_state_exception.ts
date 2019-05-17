import { Invalid_state_exception } from '../Invalid_state_exception'

export class Invalid_model_state_exception extends Invalid_state_exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.eid = 'INVALID_MODEL_STATE'
    Object.setPrototypeOf(this, Invalid_model_state_exception.prototype)
  }
}
