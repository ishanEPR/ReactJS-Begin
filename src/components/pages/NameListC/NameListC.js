import React, { Component } from 'react';

import NameListItems from '../NameList/NameListItems';


class NameListC extends Component {

    constructor(props){

        super(props);
        console.log('Constructer called');
        this.state={getaName:false,
            nameList:
            [
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
                    id:2,
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
            
            
            ]

        };

    }
    componentDidMount()
    {
    fetch("https://randomuser.me/api").then(Response=>{
      return Response.json();
    }).then(ResponseData=>{
      
       this.setState({nameList:[...this.state.nameList,ResponseData.results[0]]});
console.log(this.state.nameList);

    })
    }
   componentDidUpdate()
   {
   
   if(this.state.getaName)
   {
    fetch("https://randomuser.me/api").then(Response=>{
        return Response.json();
      }).then(ResponseData=>{
        
         this.setState({
             getaName:false,
            nameList:[...this.state.nameList,ResponseData.results[0]]});
 
  
      })
   }
       
   }
   

   addUserHandler=()=>
   {
      
      this.setState({getaName:true});
   }

   nameListComponent=()=>
   {
   
      
       return (
           this.state.nameList.map((aName)=>
           {
               return   <NameListItems key={aName.id} image={aName.picture.medium} name={aName.name.title+" "+aName.name.first+" "+aName.name.last} city={aName.location.city} email={aName.email} dob={aName.dob.date}/>
              
           })
         
       );
   }
   



    render() { 
        return (
           <div className='container mt-4'>
           <button className='btn btn-primary mb-2' onClick={this.addUserHandler}>Add Name</button>
           <ul className='list-group'>
           {this.nameListComponent()}

           </ul>

           </div>
        );
    }
}
 
export default NameListC;

