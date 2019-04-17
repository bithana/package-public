import { Canx } from './index'

test('Can parse csv string', async () => {
  const csv = `a1,b1,c1
a2,b2,c2
a3,b3,c3
`
  const data = await Canx.parse_csv_string(csv)
  expect(data).toHaveLength(3)
})

test('Can parse csv file', async () => {
  const data = await Canx.parse_csv_file('./test1.csv')
  expect(data).toHaveLength(3)
})
