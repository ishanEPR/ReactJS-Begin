import React,{useState,useEffect} from "react";
import NameListItems from './NameListItems';

function NameList(props) {

    const [loadData,setLoaddata]=useState(new Date());

    const [nameList,setState]=useState([
        {
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
            picture: {
    
              
                medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
               
              },
        },
        {
            id:1,
            name:{
        title:'mr.',
        first:'ishan',
        last:'resh',
    },
    location:{
        city:'Kottagoda,Matara',
    },
    email:'reshmikaediriweera1997@gmail.com',
    dob:{
        date:'1997-03-30',
        age:24,
    },
    picture: {
    
      
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
       
      },
    },
    
    
    ]);
   
useEffect(()=>{
    fetch("https://randomuser.me/api").then(Response=>{
      return Response.json();
    }).then(ResponseData=>{
       setState(nameList=>[...nameList, ResponseData.results[0]]);
    })
},[loadData]

);

const nameListComponent=()=>
{

   
    return (
        nameList.map((aName)=>
        {
            return   <NameListItems key={aName.id} image={aName.picture.medium} name={aName.name.title+" "+aName.name.first+" "+aName.name.last} city={aName.location.city} email={aName.email} dob={aName.dob.date}/>
           
        })
      
    );
}

const addUserHandler=()=>
{

 
 setLoaddata(new Date())

 


};

    return(
        <div className='container mt-4'>
            <button className='btn btn-primary' onClick={addUserHandler}>Add Name</button>
            <ul className='list-group mt-4'>
  
            {nameListComponent()}
    
              
            </ul>

           

        </div>
    );
    
}

export default NameList;