import { salute } from '../src/index'

it('should salute', () => {
  const res = salute()
  expect(res).toBe('Hello World')
})
