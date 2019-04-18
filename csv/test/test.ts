import { parse_csv_file, parse_csv_string } from '../index'

const DEFAULT_PATH = __dirname + '/data/default.csv'
const PIPE_DELIMITER_PATH = __dirname + '/data/pipe_delimiter.csv'
const DEFAULT_WITH_HEADER = __dirname + '/data/default_with_header.csv'

test('should parse csv string as nested array', async () => {
  const csv_str = `a1,b1,c1
a2,b2,c2
a3,b3,c3
`
  const data = await parse_csv_string(csv_str)
  await expect(data).toHaveLength(3)
})

test('should parse csv file as nested array', async () => {
  const data = await parse_csv_file(DEFAULT_PATH)
  await expect(data).toHaveLength(3)
})

test('should parse csv string as array of maps', async () => {
  const csv_str = `H1,H2,H3
a1,b1,c1
a2,b2,c2
a3,b3,c3
`
  const data = await parse_csv_string(csv_str, { columns: true })
  console.log(data)
  await expect(data[0].H1).toBe('a1')
})

test('should parse csv file as array of maps', async () => {
  const data = await parse_csv_file(DEFAULT_WITH_HEADER, { columns: true })
  await expect(data[0].H1).toBe('a1')
})

it('should parse csv string with different delimiter', async () => {
  const csv_str = `a1|b1|c1
a2|b2|c2
a3|b3|c3
`
  const data = await parse_csv_string(csv_str, { delimiter: '|' })
  await expect(data).toHaveLength(3)
  await expect(data[0][0]).toBe('a1')
})

it('should parse csv file with different delimiter', async () => {
  const data = await parse_csv_file(PIPE_DELIMITER_PATH, { delimiter: '|' })
  await expect(data).toHaveLength(3)
  await expect(data[0][0]).toBe('a1')
})
