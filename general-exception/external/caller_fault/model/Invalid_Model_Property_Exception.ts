import { Eid } from '../../../type'
import { Invalid_parameter_exception } from '../Invalid_parameter_exception'

export class Invalid_Model_Property_Exception extends Invalid_parameter_exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.eid = 'INVALID_MODEL_PROPERTY'
    Object.setPrototypeOf(this, Invalid_Model_Property_Exception.prototype)
  }
}
