import { salute } from '../src/index'

it('should work', () => {
  const res = salute()
  expect(res).toBe('hi')
})
