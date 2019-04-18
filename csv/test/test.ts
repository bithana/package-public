import { parse_csv_file, parse_csv_string } from '../index'

const DATA1_PATH = __dirname + '/data/test1.csv'
const DATA2_PATH = __dirname + '/data/test2.csv'

test('Can parse csv string', async () => {
  const csv_str = `a1,b1,c1
a2,b2,c2
a3,b3,c3
`
  const data = await parse_csv_string(csv_str)
  await expect(data).toHaveLength(3)
})

test('Can parse csv file', async () => {
  const data = await parse_csv_file(DATA1_PATH)
  await expect(data).toHaveLength(3)
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
  const data = await parse_csv_file(DATA2_PATH, { delimiter: '|' })
  await expect(data).toHaveLength(3)
  await expect(data[0][0]).toBe('a1')
})
