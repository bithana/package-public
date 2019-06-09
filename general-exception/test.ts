import { Callee_fault } from './external/callee_fault/Callee_fault'
import { Invalid_model_state } from './external/callee_fault/Invalid_model_state'

it('should throw exception', async () => {
  expect(() => {throw new Callee_fault('yo')}).toThrow(Callee_fault)
})

it('should generate eid', async () => {
  const e = new Invalid_model_state('yo')
  expect(e.eid).toContain('.')
  expect(e.chain.length).toBeGreaterThan(0)
})
