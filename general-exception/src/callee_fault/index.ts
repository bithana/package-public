import { E } from '../../index'

export class Callee_fault extends E {
  constructor(
    title    = 'Something went wrong inside the callee.',
    solution = 'The thing you are calling has an internal state problem, Please contact us to fix this.',
  ) { super(title, solution) }
}

