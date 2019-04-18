import { Canx } from '../index'
import * as fs from 'fs'

// permission table
let pt
let x: Canx
const CSV_PATH = __dirname + '/data/super.csv'

describe('Can parse permissions', () => {
  beforeEach(async () => {
    x = new Canx()
    await x.load_csv_file(CSV_PATH)
    pt = x.get_permission_table()
  })

  it('Should parse permission table from file', async () => {
    const pt = await x.load_csv_file(CSV_PATH)
    expect(pt.constructor).toBe(Array)
  })

  it('should parse permission table from string', async done => {
    fs.readFile(CSV_PATH, { encoding: 'utf-8' }, async (e, d) => {
      const pt = await x.load_csv(d)
      expect(pt.constructor).toBe(Array)
      done()
    })
  })

  it('Super can do every thing', () => {
    const su = pt[0]
    expect(su[0]).toBe('super')
    expect(su[1]).toBe('$ALL')

    expect(x.can('super', 'do', 'anything'))
  })
})
