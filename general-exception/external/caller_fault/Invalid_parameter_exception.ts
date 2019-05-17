import { Eid } from '../../type'
import { External_exception } from '../External_exception'

export class Invalid_parameter_exception extends External_exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.eid = 'INVALID_PARAMETER'
    Object.setPrototypeOf(this, Invalid_parameter_exception.prototype)
  }
}
