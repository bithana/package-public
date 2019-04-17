import { Canx } from '.'

test('Can do every thing', async () => {
  const permission = `admin,$ALL`
  const x = new Canx()
  await x.load_csv_file('./test_data/super.csv')
  console.log(x.get_permission_table())
})
