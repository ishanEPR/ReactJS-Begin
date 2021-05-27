import React, { Component } from 'react';

class NameListC extends Component {

    constructor(){

        super();
        console.log('Constructer called');
        this.state={message:'Hello State'};

    }
    componentDidMount()
    {
        console.log('componentDidMount Method called');
    }
   componentDidUpdate()
   {
    console.log('componentDidUpdate Method called');
    console.log(this.state.message);
       
   }

   addUserHandler=()=>
   {
       console.log('button clicked');
       console.log(this.state.message);
       this.setState({message:"Hello State Changed"});
   }
    render() { 
        return (
           <div className='container mt-4'>
           <button className='btn btn-primary mb-2' onClick={this.addUserHandler}>Add Name</button>
           <ul className='list-group'>

           </ul>

           </div>
        );
    }
}
 
export default NameListC;

