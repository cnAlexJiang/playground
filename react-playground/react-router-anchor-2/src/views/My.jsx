import React, {useState} from 'react';
import {Link, Prompt} from 'react-router-dom';

export default function My(props) {
    const [text, setText] = useState('');
    const [isBlocking, setIsBlocking] = useState(false);

    return (
        <div>
            <Link to={'/home'}>Go Home</Link>
            <Prompt
                when={isBlocking}
                message={(location, action) => {
                    return JSON.stringify({
                        action,
                        location,
                        curHref:'/my',
                        message: `Are you sure you want to go to ${location.pathname}`,
                    });
                }}
            />
            <div> Page My</div>
            <input type="text"
                   value={text}
                   onChange={(ev) => {
                       const val = ev.target.value;
                       setText(val);
                       setIsBlocking(!!val);
                   }}/>
        </div>
    );
}

