import { E } from './index'
import { Callee_fault } from './src/callee_fault'
import { Invalid_state } from './src/callee_fault/invalid_state/index'
import { Caller_fault } from './src/caller_fault/index'
import { GENERAL_EXCEPTION } from './src/constant'

it('E', async () => {
  expect(() => {throw new E({ title: 'yo' })}).toThrow(E)
  expect(() => {throw new Caller_fault('yo')}).toThrow(Caller_fault)
})

it('should throw exception', async () => {
  expect(() => {throw new Callee_fault('yo')}).toThrow(Callee_fault)
})

it('should throw right type', async () => {
  expect(() => {throw new Invalid_state('yo')}).toThrow(Invalid_state)
})

it('should generate eid', async () => {
  const e = new Callee_fault('yo', 'ha')
  expect(e.eid).toBe(GENERAL_EXCEPTION)
})

it('should generate echain', async () => {
  const e = new Callee_fault('yo')
  expect(e.echain).toContain('.')
  expect(e.chain.length).toBeGreaterThan(0)
})

it('should print default message', async () => {
  const e = new Invalid_state()
  expect(e.message).toHaveLength
})
