// import React from 'react';

// function NameListItems1(props)
// {
//     return <li>{props.name} course-{props.course}</li>;
// }

// export default NameListItems1;

import moment from 'moment';
import React from 'react';
import NameList from './NameList';

function NameListItems1(props)
{
    return(
        <div>
            <li>
            <p><img src={props.image}></img></p>
           
            <p>{props.name} </p>
            <p> {props.email}</p>
            <p>City:{props.city}</p>
            <p>{moment(props.dob).format('DD-MM-YYYY')}</p>
           </li>

        
           
        </div>
    );
}
export default NameListItems1;