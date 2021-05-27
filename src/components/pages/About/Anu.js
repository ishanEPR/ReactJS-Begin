import React from 'react';

function Anu(props)
{
    const nameList={
        gender:"male",
        name:
        {title:"Mr",
        first:"Kurt",
        last:"Macrae"},

        picture:"https://randomuser.me/api/portraits/med/men/28.jpg",

    }
    return (
        <div>

           <li>
          <img src={nameList.picture}/>
          <p>
              {nameList.name.title+" "+nameList.name.first}
          </p>
           </li>
          
        </div>
    );
}
export default Anu;