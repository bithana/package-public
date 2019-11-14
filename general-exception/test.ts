import { Callee_fault } from './src/callee_fault'
import { Invalid_model_state } from './src/callee_fault/invalid_model_state'
import { E } from './index'
import { Caller_fault } from './src/caller_fault/index'

it('E', async () => {
  expect(() => {throw new E('yo')}).toThrow(E)
  expect(() => {throw new Caller_fault('yo')}).toThrow(Caller_fault)
})

it('should throw exception', async () => {
  expect(() => {throw new Callee_fault('yo')}).toThrow(Callee_fault)
})

it('should generate eid', async () => {
  const e = new Invalid_model_state('yo')
  expect(e.eid).toContain('.')
  expect(e.chain.length).toBeGreaterThan(0)
})
