import React from 'react'
import Link from 'gatsby-link'

import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-130260292-1');
    ReactGA.pageview('/homepage');
}

// Because it was easier to style, I hard coded the title in meaning "siteTitle" does not do anything  
const Header = ({ siteTitle }) => ( 
    <div className="website-title center"> 
        <p className="blue">B</p>
        <p className="red">H</p>
        <p className="yellow">0'</p>
        <p className="blue">S</p>
        <p className="green">B</p>
        <p className="yellow">L</p>
        <p className="blue">O</p>
        <p className="red">G</p>
    </div>   
)

export default Header; 
