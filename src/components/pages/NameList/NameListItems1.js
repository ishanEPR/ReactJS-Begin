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
            <li className='list-group-item shadow-sm'>
            <div className='row align-items-center'>
                <div className='col-3'>
                <img src={props.image} alt={props.name} 
                    className='border border-dark rounded-circle'
                />


                </div>
                <div className='col-6'>
                <h3>{props.name} </h3>
            <p> {props.email} | City:{props.city}</p>
           
            <p>Birthday:{moment(props.dob).format('DD-MM-YYYY')}</p>

                </div>

            </div>
            
           
         
           </li>

        
           
        </div>
    );
}
export default NameListItems1;