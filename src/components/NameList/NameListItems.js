import React from 'react';
import moment from 'moment';
import './NameListItems.css';
function NameListItems(props)
{
    return (
        <li>
            <p className='redText'>{props.name}</p>
            <p>course-{props.course}</p>
            <p>{props.email}</p>
            <p>Birthday- {moment(props.birth).format('DD-MM-YYYY')}</p>
         </li>
    );
}

export default NameListItems;