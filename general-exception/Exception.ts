import { Eid, Exception_Interface, Exception_Visibility } from './type'

export class Exception extends Error implements Exception_Interface {
  /**
   * Exception Constructor Name
   *
   * @example 'External_Exception'
   */
  type: string

  constructor(
    public eid: Eid,
    public message: string,
    public visibility: Exception_Visibility = 'INTERNAL',
    public solution?: string,
    public data?: any,
  ) {
    super()
    this.type = this.constructor.name
  }

  /**
   * Whether `this` is given Exception Type
   * @param Exception_Class
   */
  is(Exception_Class) {
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
