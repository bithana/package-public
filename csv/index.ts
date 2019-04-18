import * as fs from 'fs'
import * as $csv from 'csv'
import * as csv_parse from 'csv-parse'

export interface Parse_Option$ extends csv_parse.Options {}

const default_option$: Parse_Option$ = {
  cast: true,
  trim: true,
  skip_empty_lines: true,
}

export const parse_csv_string = parse

/**
 * Parse CSV From String
 * @param str
 *
 * @example
 * await csv.parse_csv_string(`a,b,c`)
 * @example
 * await csv.parse_csv_string(`a|b|c`, { delimiter: '|' })
 */
export async function parse(str: string, options: Parse_Option$ = {}) {
  options = { ...default_option$, ...options }
  return new Promise((resolve, reject) => {
    $csv.parse(str, options, (e, d) => {
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
 * await csv.parse_csv_file('path/to/file.csv')
 * @example
 * await csv.parse_csv_file('path/to/pipe_separated_value.psv', { delimiter: '|' })
 */
export async function parse_csv_file(filepath: string, options: Parse_Option$ = {}) {
  options = { ...default_option$, ...options }
  const parsed = []
  return new Promise((resolve, reject) => {
    fs.createReadStream(filepath)
      .pipe($csv.parse(options))
      .on('data', function (row) {
        parsed.push(row)
      })
      .on('end', function () {
        resolve(parsed)
      })
  })
}


