import { createContext } from 'react'
// 定义 MyContext,指定默认的主题为`light`
export const MyContext = createContext({
    theme: 'light'
})
