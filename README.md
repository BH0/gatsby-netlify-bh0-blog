# gatsby-netlify-cms-example
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site with [Netlify
CMS](https://netlifycms.org).

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/erquhart/gatsby-netlify-cms-example
```

## Running in development
`gatsby develop`


Issues: 
* to prevent "WebpackError: Cannot read property 'frontmatter' of null" make sure each blog post's path is "/blog/blogname" or "/blogname", but never "blog/blogname" or "blogname" - ensure there is always a leading slash 

