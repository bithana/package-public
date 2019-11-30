import { E, T_error_opt } from '../../index'

export class Callee_fault extends E {
  constructor(
    title: string | T_error_opt = 'Something went wrong inside the callee.',
    solution                    = 'The thing you are calling has an internal state problem, Please contact us to fix this.',
  ) { super(title, solution) }
}

