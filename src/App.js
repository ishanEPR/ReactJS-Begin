import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NameList from './components/pages/NameList/NameList';
import Home from './components/pages/Home/Home';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Contact from './components/pages/Home/Contact';

import Counter from './components/Counter';

function App()
{
 return(
   <div>
   {/* mosh tutorial begin */}
   <Counter/> 

   
   <BrowserRouter>
   <HeaderBar/>
   <Switch>
   <Route path='/nameList'>
   <NameList/>

   </Route>
   <Route path='/contact'>
   <Contact/>

   </Route>
   <Route path='/'>

   <Home/>
   </Route>


   </Switch>
      
    
    

   </BrowserRouter>
    
    
     
   </div>
   

  


 
 );
}

export default App;