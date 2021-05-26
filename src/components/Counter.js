import React, { Component } from 'react';

class Counter extends Component {

    state={
        count:0,
       
    }
    styles={

        fontSize:10,
        fontWeight:'bold',
       
    };
  
    render() { 
       return (
           <div>
           
               <span  style={this.styles}   class="badge bg-primary m-2">{this.formatCount()}</span>
               <button className="btn btn-secondary">Add me</button>
           </div>
       );
    }

    formatCount(){
        const {count}=this.state;
        return count=== 0 ?"Zero":count;
    }
}
 
export default Counter;