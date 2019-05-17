import { Eid } from '../../../type'
import { Invalid_Parameter_Exception } from '../Invalid_Parameter_Exception'

export class Invalid_Model_Property_Exception extends Invalid_Parameter_Exception {
  constructor(message: string, solution?: any, data?: any) {
    super(message, solution, data)
    this.eid = 'INVALID_MODEL_PROPERTY'
    Object.setPrototypeOf(this, Invalid_Model_Property_Exception.prototype)
  }
}
