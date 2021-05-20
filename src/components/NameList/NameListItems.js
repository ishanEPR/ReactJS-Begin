import React from 'react';
import moment from 'moment';

function NameListItems(props)
{
    return (
        <li>
            <p>{props.name}</p>
            <p>course-{props.course}</p>
            <p>{props.email}</p>
            <p>Birthday- {moment(props.birth).format('DD-MM-YYYY')}</p>
         </li>
    );
}

export default NameListItems;