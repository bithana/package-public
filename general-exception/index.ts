import { CustomError } from 'ts-custom-error'
import { GENERAL_EXCEPTION } from './src/constant'
import { Eid, Exception_Interface } from './type'
import { blue, cyan } from 'chalk'

export class E extends CustomError implements Exception_Interface {

  /**
   * Unique error code for error identifying, can be overwritten by by descendents.
   */
  eid: Eid | string = GENERAL_EXCEPTION

  /**
   * String version of error chain from inheritance.
   * @example 'e.external.invalid_api_argument'
   */
  echain: string

  /**
   * Error chain from inheritance.
   * @example [ 'e', 'external', 'invalid_api_argument' ]
   */
  chain: string[] = []

  /**
   * Error level, defined and specified by descendents.
   *
   * @example 'internal'
   * @example 'api'
   * @example 'database'
   * @example 'file'
   */
  level: string

  /**
   * Error title
   * One line to cover the error.
   *
   * @example 'Missing configuration <port> for database'
   */
  title: string

  /**
   * How to solve this problem
   */
  public solution?: string

  public message: string

  public data?: any

  constructor(
    title?: string,
    solution?: string,
    data?: any,
  ) {
    super()

    this.title = title
    this.solution = solution
    this.data = data
    this.echain = this.generate_echain()

    // Last order
    this.message = this.toString()
  }

  /**
   * @param ins
   * @param echain
   */
  generate_echain(ins = undefined) {
    if (ins === undefined) {
      ins = this
    }

    ins = Object.getPrototypeOf(ins)
    const name = ins.constructor.name.toLowerCase()

    this.chain.unshift(name)

    if (ins.constructor === E || !ins.constructor) {
      return this.chain.join('.')
    }

    return this.generate_echain(ins)
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
    const title = `${this.title ?? '-'}`
    const detail = cyan(`

  Solution: ${this.solution ?? '-'}
  Eid: ${this.eid ?? '-'}
  Echain: ${this.echain ?? '-'}
`)

    return title + detail
  }
}
