import React from 'react'; 
import PropTypes from 'prop-types'; 
import Helmet from 'react-helmet'; 

import Header from '../components/header'; 
import Searchbar from '../components/searchbar'; 
import Navbar from '../components/navbar'; 

import './index.css'; 

// import './syntax-highlighting.css'; 
require("prismjs/themes/prism-solarizedlight.css"); // also in gatsby-browser.js 
require("prismjs/plugins/line-numbers/prism-line-numbers.css"); 
// import 'prismjs/themes/prism-solarizedlight.css'; 

const Layout = ({ children, data }) => (
  <div class="mobile">
    {/* 
    <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
    */}
      <Header siteTitle={data.site.siteMetadata.title} />  
      <Searchbar /> 
      <Navbar /> 
      <div className="mobile articles-container">   
          {children()} 
      </div> 
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout; 

// may not need: 
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`; 