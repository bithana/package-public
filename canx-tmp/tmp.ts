import * as _ from 'lodash'

/**
 * `string` could be 'read'|'update'|'modify'|'do'...
 */

type Action$ = string[] | Function[]

class Canx {
  protected permission: {
    [role: string]: Action$ | {
      [table: string]: Action$ | {
        [field: string]: Action$
      }
    }
  }

  allow(role: string, action: string | Action$, table, exception?) {
    _.set(this.permission, role, action)
  }

  allowTable(role, action) {

  }
}

// const can = new Canx()
// can.allow('admin', 'read', 'a')

const a = {}
