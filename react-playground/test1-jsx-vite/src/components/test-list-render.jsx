import React, { useState } from "react";

export function NumberList(props) {
    const numbers = props.numbers;
    const [list, setList] = useState([0])
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    const add = () => {
        console.log(111, 'add', props)
        props.numbers.push(1)
        list.push(1)
        // setList([...list])

        console.log(222, 'add', list)

    }
    return (
        <ul >
            <button onClick={add} >{props.numbers.length}</button>
            {/* <button onClick={add} >{list.length}</button> */}
            <div>{list}</div>
            {listItems}
        </ul>
    );
}