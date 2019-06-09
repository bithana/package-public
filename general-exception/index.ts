import { CustomError } from 'ts-custom-error'
import { Eid, Exception_Interface } from './type'

export class E extends CustomError implements Exception_Interface {

  eid: Eid | string = ''

  chain: string[] = []

  constructor(
    public message: string,
    public solution?: string,
    public data?: any,
  ) {
    super(message)
    this.eid = this.make_eid()
  }

  make_eid(ins = undefined, eid = '') {
    if (ins === undefined) {
      ins = this
    }

    ins = Object.getPrototypeOf(ins)
    const name = ins.constructor.name.toLowerCase()

    this.chain.unshift(name)
    eid = name + (eid ? '.' : '') + eid

    if (ins.constructor === E || ins.constructor === null) {
      return eid
    }

    return this.make_eid(ins, eid)
  }

  /**
   * Whether `this` is given Exception Type
   * @param Exception_Class
   */
  is(Exception_Class: Function) {
    return this instanceof Exception_Class
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
