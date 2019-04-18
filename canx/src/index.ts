import { parse_csv_file, parse_csv_string } from '@bithana/csv'

export type Permission_Table = string[][]

export class Canx {
  protected permission_table: Permission_Table

  can(role, action, thing) {

  }

  can_do_everything(role) {

  }

  async load_csv(csv_str: string) {
    return this.permission_table = await <any>parse_csv_string(csv_str)
  }

  async load_csv_file(filepath: string) {
    return this.permission_table = await <any>parse_csv_file(filepath)
  }

  get_permission_table() {
    return this.permission_table
  }
}


