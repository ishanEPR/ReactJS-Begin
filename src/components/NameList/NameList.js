import React from 'react';
import NameListItems from './NameListItems';
import NameListItems1 from './NameListItems1';
function NameList()
{
    const nameList=[{
        id:1,

        name:{
            title:'mr.',
            first:'ishan',
            last:'reshmika',
        },
        location:{
            city:'Kottagoda,Matara',
        },
        email:'reshmikaediriweera1997@gmail.com',
        dob:{
            date:'1997-03-30',
            age:24,
        },

    },
    {

        id:2,
        name:{
            title:'ms.',
            first:'nelara',
            last:'sanvinduni',
        },
        location:{
            city:'Kottagoda,Matara',
        },
        email:'nelara@gmail.com',
        dob:{
            date:'1997-03-30',
            age:24,
        },

    },
    {
        id:3,

        name:{
            title:'mr.',
            first:'dilshan',
            last:'lakshitha',
        },
        location:{
            city:'Kottagoda,Matara',
        },
        email:'dilshan@gmail.com',
        dob:{
            date:'1997-03-30',
            age:24,
        },

    },
    {
        id:4,
        name:{
            title:'ms.',
            first:'ishan',
            last:'reshmika',
        },
        location:{
            city:'Kottagoda,Matara',
        },
        email:'reshmikaediriweera1997@gmail.com',
        dob:{
            date:'1997-03-30',
            age:24,
        },

    },];

    const nameListComponent=()=>
    {
        return(
            nameList.map(aName=>
                {
                    return(    <NameListItems key={aName.id} name={aName.name.title+' '+aName.name.first} email={aName.email} birth={aName.dob.date}/>
                    )
                })
        
        );
    }
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
         
           {nameListComponent()}
      
            </ul>

        </React.Fragment>
     
    );
}

export default NameList;