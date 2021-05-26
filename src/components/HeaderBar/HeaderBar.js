// import React from 'react';
// import {Link}  from 'react-router-dom';

// function HeaderBar()
// {
//    return (
//         <nav className='navbar navbar-expand-lg navbar-light bg-light shadow'>
//             <span className='navbar-brand mb-0 h1'>Name List</span>
//             <ul className='navbar-nav'>
//                 <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
//                 <li className='nav-item'><Link className='nav-link' to='/about'>Contact</Link></li>
//                 <li className='nav-item'><Link className='nav-link' to='/nameList'>About</Link></li>
//             </ul>
//         </nav>
//    );
// }
// export default HeaderBar;

import React from 'react';
import {Link} from 'react-router-dom';

function HeaderBar()
{
    return (
        <nav className='navbar navbar-expand-lg navbar-light light-bg'>
            <span className='navbar-expand h1'>Navbar</span>
            <ul className='navbar-nav'>
                <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/nameList'>NameList</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}
export default HeaderBar;