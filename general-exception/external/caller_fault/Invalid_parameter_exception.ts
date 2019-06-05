import { Eid } from '../../type'
import { External_exception } from '../External_exception'

export class Invalid_parameter_exception extends External_exception {
  eid = 'INVALID_PARAMETER'

  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    Object.setPrototypeOf(this, Invalid_parameter_exception.prototype)
  }
}
