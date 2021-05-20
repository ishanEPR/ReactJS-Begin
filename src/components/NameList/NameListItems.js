import React from 'react';

function NameListItems(props)
{
    return (
        <li>{props.name} course-{props.course}</li>
    );
}

export default NameListItems;