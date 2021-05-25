// import React,{useState,useEffect} from 'react';
// import NameListItems from './NameListItems';
// import NameListItems1 from './NameListItems1';

// function NameList()
// {
//     const [loadData,setLoadData]=useState(new Date());
//     const [nameList,setnameList]=useState([{
//         id:1,
    
//         name:{
//             title:'mr.',
//             first:'ishan',
//             last:'reshmika',
//         },
//         location:{
//             city:'Kottagoda,Matara',
//         },
//         email:'reshmikaediriweera1997@gmail.com',
//         dob:{
//             date:'1997-03-30',
//             age:24,
//         },

//     },
//     {

//         id:2,
//         name:{
//             title:'ms.',
//             first:'nelara',
//             last:'sanvinduni',
//         },
//         location:{
//             city:'Kottagoda,Matara',
//         },
//         email:'nelara@gmail.com',
//         dob:{
//             date:'1997-03-30',
//             age:24,
//         },

//     },
//     {
//         id:3,

//         name:{
//             title:'mr.',
//             first:'dilshan',
//             last:'lakshitha',
//         },
//         location:{
//             city:'Kottagoda,Matara',
//         },
//         email:'dilshan@gmail.com',
//         dob:{
//             date:'1997-03-30',
//             age:24,
//         },

//     },
//     {
//         id:4,
//         name:{
//             title:'ms.',
//             first:'ishan',
//             last:'reshmika',
//         },
//         location:{
//             city:'Kottagoda,Matara',
//         },
//         email:'reshmikaediriweera1997@gmail.com',
//         dob:{
//             date:'1997-03-30',
//             age:24,
//         },

//     },]);
   
//     useEffect(() => {
//       fetch("https://randomuser.me/api").then(Response=>
//       {
//           return Response.json();
//       }).then(ResponseData=>
//         {
//           setnameList( (nameList)=>[...nameList, ResponseData.results[0]])
//          // console.log(ResponseData.results[0]);
//         })
//     },[loadData])

//     const nameListComponent=()=>
//     {
//         return(
//             nameList.map(aName=>
//                 {
//                     return(    <NameListItems key={aName.id} name={aName.name.title+' '+aName.name.first} email={aName.email} birth={aName.dob.date}/>
//                     )
//                 })
        
//         );
//     }

//     const addUserHandler=()=>
//     {
//       setLoadData(new Date());

//     }
  
//     return(
//         <React.Fragment>
//            <div className='container mt-4'>
//            <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add</button>
//            <ul className='list-group'>
         
//          {nameListComponent()}
    
//           </ul>

//            </div>
          

//         </React.Fragment>
     
//     );
// }

// export default NameList;

import React from "react";
import NameListItems1 from './NameListItems1';

function NameList(props) {

    const nameList=[
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


];


const nameListComponent=()=>
{

   
    return (
        nameList.map((aName)=>
        {
            return   <NameListItems1 key={aName.id} image={aName.picture.medium} name={aName.name.title+" "+aName.name.first+" "+aName.name.last} city={aName.location.city} email={aName.email} dob={aName.dob.date}/>
           
        })
      
    );
}

    return(
        <div className='container'>
            <ul className='list-group'>
  
            {nameListComponent()}
    
              
            </ul>

           

        </div>
    );
    
}

export default NameList;