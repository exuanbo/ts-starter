import { greetings } from '../src/index'

it('should work', () => {
  const res = greetings()
  expect(res).toBe('hi')
})
