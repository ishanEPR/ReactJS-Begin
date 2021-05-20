import React from 'react';
import NameListItems from './NameListItems';
import NameListItems1 from './NameListItems1';
function NameList()
{
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
           <NameListItems/>
            <NameListItems1/>
            <li>Ishan</li>
            <li>Ishan</li>
            </ul>

        </React.Fragment>
     
    );
}

export default NameList;