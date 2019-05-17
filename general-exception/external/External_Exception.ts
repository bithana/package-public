import { Exception } from '../Exception'
import { Eid } from '../type'

export class External_Exception extends Exception {
  status_code = 400

  constructor(message: string, solution?: string, data?: any) {
    super('UNKNOWN_EXTERNAL_EXCEPTION', message, 'EXTERNAL', solution, data)
    Object.setPrototypeOf(this, External_Exception.prototype)
  }
}
