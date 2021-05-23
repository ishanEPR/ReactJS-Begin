import React from 'react';
import moment from 'moment';
import './NameListItems.css';
function NameListItems(props)
{
    return (
        <li className='list-group-item shadow'>
        <div className='row'>
            <div className='col-3'>
            <p className='redText'>{props.name}</p>
                
            </div>
            <div className='col-sm'>
            <p>course-{props.course}</p>
            <p>{props.email}</p>
            <p>Birthday- {moment(props.birth).format('DD-MM-YYYY')}</p>

            </div>
            
        
           

        </div>
          
         </li>
    );
}

export default NameListItems;