import React from 'react'; 
import Link from 'gatsby-link';

import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-130260292-1');
    ReactGA.pageview('/homepage');
}

{/* I kept the anchor tags inside the link because the anchor tags are already styled */}
const Navbar = () => 
    <div className="navigation center"> 
        <Link to="/">Recent</Link> 
        <Link to="/archives/">Archives</Link>
        <Link to="/">Most viewed</Link> 
        <Link to="/">About</Link> 
    {/* <a>category</a> */} 
    </div> 

export default Navbar; 