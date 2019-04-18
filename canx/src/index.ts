import { csv } from '@bithana/csv'

export type Permission_Table = string[][]

export class Canx {
  protected permission_table: Permission_Table

  can(role, action, thing) {

  }

  async load_csv(csv_str: string) {
    return this.permission_table = await <any>csv.parse_csv_string(csv_str)
  }

  async load_csv_file(filepath: string) {
    return this.permission_table = await <any>csv.parse_csv_file(filepath)
  }

  get_permission_table() {
    return this.permission_table
  }
}


