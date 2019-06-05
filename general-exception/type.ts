export type Eid =
  // Caller's fault.
  'INVALID_PARAMETER' |
  'INVALID_PROPERTY' |
  'INVALID_MODEL_PROPERTY' |

  // Caller's fault.
  'INVALID_STATE' |
  'INVALID_MODEL_STATE' |

  // Prevent this kind of exceptions as less as possible.
  'UNKNOWN_EXTERNAL_EXCEPTION'

export type Exception_Visibility = 'INTERNAL' | 'EXTERNAL'

export interface Exception_Interface {
  eid: Eid | string
  message: string
  solution?: string
  data?: any
}
