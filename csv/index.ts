import * as fs from 'fs'
import * as $csv from 'csv'

export namespace csv {
  /**
   * Parse CSV From String
   * @param str
   *
   * @example
   * await Canx.parse_csv_string(`a,b,c`)
   */
  export async function parse_csv_string(str: string) {
    return new Promise((resolve, reject) => {
      $csv.parse(str, (e, d) => {
        if (e)
          reject(e)
        else
          resolve(d)
      })
    })
  }

  /**
   * Parse CSV From File
   * @param filepath
   *
   * @example
   * await Canx.parse_csv_file('path/to/file.$csv')
   */
  export async function parse_csv_file(filepath: string) {
    const parsed = []
    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe($csv.parse())
        .on('data', function (row) {
          parsed.push(row)
        })
        .on('end', function () {
          resolve(parsed)
        })
    })
  }
}


