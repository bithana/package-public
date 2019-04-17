import { csv } from './index'

test('Can parse $csv string', async () => {
  const csv_str = `a1,b1,c1
a2,b2,c2
a3,b3,c3
`
  const data = await csv.parse_csv_string(csv_str)
  await expect(data).toHaveLength(3)
})

test('Can parse $csv file', async () => {
  const data = await csv.parse_csv_file('./test1.csv')
  await expect(data).toHaveLength(3)
})
