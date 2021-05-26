import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NameList from './components/pages/NameList/NameList';
import Home from './components/pages/Home/Home';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Contact from './components/pages/Home/Contact';

function App()
{
 return(
   <div>
   
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