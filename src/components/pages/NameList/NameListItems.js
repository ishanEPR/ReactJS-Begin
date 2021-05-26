import React from 'react';
import moment from 'moment';
import './NameListItems.css';
function NameListItems(props)
{
    return (
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
    );
}

export default NameListItems;