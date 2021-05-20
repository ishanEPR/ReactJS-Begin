import React from 'react';
import NameListItems from './NameListItems';
function NameList()
{
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
           <NameListItems/>
            <li>Ishan</li>
            <li>Ishan</li>
            <li>Ishan</li>
            </ul>

        </React.Fragment>
     
    );
}

export default NameList;