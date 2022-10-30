// MyComponent.test.js
// 文档地址: https://testing-library.com/docs/vue-testing-library/examples
import MyComponent from '../components/MyComponent.vue'
import { render, fireEvent } from '@testing-library/vue'

test('increments value on click', async () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(MyComponent)

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    getByText('Times clicked: 0')

    const button = getByText('increment')

    // Dispatch a native click event to our button element.
    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 2')
})