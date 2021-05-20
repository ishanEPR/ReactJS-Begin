import React from 'react';

function NameListItems(props)
{
    return (
        <li>
            <p>{props.name}</p>
            <p>course-{props.course}</p>
            <p>{props.email}</p>
            <p>Birthday-{new Intl.DateTimeFormat('en-US').format(new Date(props.birth)) }</p>
         </li>
    );
}

export default NameListItems;