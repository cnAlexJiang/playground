import { MyContext } from './MyContext';
import { useState } from 'react';
import Card from './Card';

export default function () {

    const [theme, setTheme] = useState('dark')

    return (
        <MyContext.Provider
            value={{
                theme
            }}
        >
            <Card title="标题">
                2312131
            </Card>
        </MyContext.Provider>
    )
}
