import { Eid, Exception_Interface, Exception_Visibility } from './type'
import { CustomError } from 'ts-custom-error'

export class Exception extends CustomError implements Exception_Interface {
  /**
   * Exception Constructor Name
   *
   * @example 'External_Exception'
   */
  type: string

  constructor(
    public eid: Eid | string,
    public message: string,
    public visibility: Exception_Visibility = 'INTERNAL',
    public solution?: string,
    public data?: any,
  ) {
    super(eid)
    Object.setPrototypeOf(this, Exception.prototype)
    this.type = this.constructor.name
  }

  /**
   * Whether `this` is given Exception Type
   * @param Exception_Class
   */
  is(Exception_Class: Function) {
    return this instanceof Exception_Class
  }

  set_eid(eid: Eid) {
    this.eid = eid
  }

  get_data() {
    return this.data
  }

  get_message() {
    return this.message
  }

  get_solution() {
    return this.solution
  }

  to_doc() {
    return `${this.eid}
    
    Message:
    ${this.message || '-'}

    Solution:
    ${this.solution || '-'}
    
    Data:
    ${this.data ? JSON.stringify(this.data) : '-'}
    `
  }

  toString() {
    return `${this.eid}${this.message ? `:${this.message}` : ''}`
  }
}
