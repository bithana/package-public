import { E, T_error_opt } from '../../index'

export class Caller_fault extends E {
  constructor(
    title: string | T_error_opt = 'You likely have an error in you input.',
    solution                    = 'If you are confused about this, contact us to fix it.',
  ) { super(title, solution) }
}
