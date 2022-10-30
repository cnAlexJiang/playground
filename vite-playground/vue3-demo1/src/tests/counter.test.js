// counter.test.js
import { useCounter } from '../utils/counter'

test('useCounter', () => {
    const { count, increment } = useCounter()
    expect(count.value).toBe(0)

    increment()
    expect(count.value).toBe(1)
})
