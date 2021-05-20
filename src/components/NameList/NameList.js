import React from 'react';
import NameListItems from './NameListItems';
import NameListItems1 from './NameListItems1';
function NameList()
{
    const nameList=[{

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

    }];
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
           <NameListItems 
           name='Ishan Reshmika' 
           course='c'
           email='ishan@gmail.com'
           avater=''
           city=''    
           />
            <NameListItems name={nameList[0].name.title+' '+nameList[0].name.first} email={nameList[0].email} birth={nameList[0].dob.date}/>
            <NameListItems name='Nelara' course='Java'/>
            <NameListItems name='Ashini' course='Nodejs'/>
            </ul>

        </React.Fragment>
     
    );
}

export default NameList;