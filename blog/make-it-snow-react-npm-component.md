---
path: /blog/make-it-snow-react-npm-component
date: '2018-12-22'
title: Make It Snow React & NPM Component
---
In this tutorial, we will learn how to make a component that "snows" over another component, and publish this component to the NPM library (registry) so others can install and use it easily throughout their React applications. 



\# What you should know 

In this tutorial, I assume you have basic React knowledge, Our component will, in essence, be a higher-order -component. 



\# The Setup 

You might be tempted to run "create-react-app", but instead, we will be using the module "create-react-library", which is essentially Create-react-app for NPM development. 



\`\``

npm install --global create-react-library

 create-react-library

\`\`` 

Fill out the fields that you are prompted to complete (similar to running "npm init"). Make sure to select the default option (unless you wish to use one of the other template options, but be aware this blog post is tailored for "default"). And I will be using the "npm" option. 



I name my library (module/package) "make-it-snow", but you may want to call it something else if you are going to be publishing it to NPM so as to avoid triggering the NPM spam filters. 



The "create-react-library" is a bit weird to begin with, as you will need to run a local server for your module, and then a local server for a "test project" that will utilize your module. This means you need to be cautious that you don't accidentally work in the example/test directory thinking it is your module directory. The "example" directory, is the directory that will allow you to preview your project in action - it has its own package.json file, and the outer "src" directory is your module - which uses the most-top-level package,json file - this one I will refer to as the "your module" directory. 



We are going to be using ParticleJS \["react-particle-js"], which is a simple library that allows you to display particles on your webpage. And we will be using one of react-particle-js's "snow" presets (but feel free to customize yours when the time comes). 



Inside your module directory \[outside the example directory], run "npm install --save react-particlex-js". 



\# Our Module's Code 



Inside your module directory, input the following code into the "index.js" file, please note that you are welcome to have more than one component, but as this tutorial only involves one \[relevant] component, I will be putting the component directly into the "index.js" file. And feel free to save the particle JS configuration code in its own module or package.json. 



\`\``js

import React from "react"

import Particles from 'react-particles-js';



const MakeItSnow = (WrappedComponent) => { 

\    const particleConfig = {

\    "particles": {

\    "number": {

\    "value": 260,

\    "density": {

\    "enable": false

\    }

\    },

\    "size": {

\    "value": 10,

\    "random": true

\    },

\    "move": {

\    "direction": "bottom",

\    "out_mode": "out"

\    },

\    "line_linked": {

\    "enable": false

\    }

\    },

\    "interactivity": {

\    "events": {

\    "onclick": {

\    "enable": true,

\    "mode": "remove"

\    }

\    },

\    "modes": {

\    "remove": {

\    "particles_nb": 10

\    }

\    }

\    }

  }

  

  const background = { 

\    backgroundColor: "grey", 

\    opacity: 0.24

\    }



\    const styling = { 

\    position:"absolute",

\    top: 0

\    } 



\    return props => { 

\    return (

\    <div style={background}>  

\    <Particles style={styling} params={particleConfig} />                

\    <WrappedComponent style={styling} {...props} /> 

\    </div> 

\    )

\    }

}



export default MakeItSnow; 

\`\``



It may look like a lot, but it is not, so let's break it down. 



What we essentially have is: 

\`\``js 

import React from "react"

import Particles from 'react-particles-js';



const MakeItSnow = (WrappedComponent) => { 

\    const particleConfig = { /\* ... \*/  }  

	// optional background 

\    const styling = {  // means the user's component will not conflict with our Particle component 

\    position:"absolute",

\    top: 0

\    } 

\    return props => { 

\    return (

\    <div style={background}>  

\    <Particles style={styling} params={particleConfig} />                

\    <WrappedComponent style={styling} {...props} /> 

\    </div> 

\    ) 

} 

\`\``



This is what is known as a higher order component, borrowing from Net Ninja, a higher order component is simply a supercharged component - that is, it is a component that has been given an upgrade - this upgrade will be applied to the component (or components) that are nested within your higher order component, we take a component as a parameter, and then we return that component (and some optional JSX), as  we return that component, we also give props (via the spread operator) to the returned component - think of this returned component as the user of our module's component. We will allow the user to pass their component to our modular component as they export their own component. 



Think of a higher order component as a human, this human is just a regular human, but when this human wears a mask (the higher-order-component), the human has superpowers, such as the ability to create snow. 



There is some styling done, this is just some CSS-in-JS, this is optional. Since we do not want our particle component to push our user's component to the bottom, we apply some basic styling to make the particle component and our user's component sit on the same level (or at least look like they are). 



The particleCofnig object is the configuration that our Particle component will use, this could be things like, how much snow to display, the size of each snowdrop, I encourage you to experiment using the documentation yourself to figure out what each value of these represents. 



\# Previewing our component 

Inside the "example" directory, inside a component of your choice or the App component, we will wrap this component with our module. Meaning, snow shall fall. 



\`\``js

// App.js 

import React, { Component } from 'react';

import './App.css';



import MakeItSnow from "make-it-snow-test"



class App extends Component {

  render() {

\    return (

\    <div className="App">

\    <header className="App-header">

\    <h1>LET IT SNOW</h1> 

\    </header>

\    </div>

\    );

  }

}



export default MakeItSnow(App); 

\`\``



That last line means that first, we invoke our module, then our module will invoke the component that it received as a parameter. Notice, that we do not need to give the path of our module, we just treat it like a published NPM module, this is thanks to "create-react-library". Also, I hope by now you have realized that though NPM does not use your Github account directly, there is a strong "synergy" between a Github repository and an NPM module's page. 



\# Publishing our component 

Firstly, add a ".npmignore" file in the root directory, this is similar to ".gitignore" except it will stop sending the specified files and folders to the NPM registry meaning your package will be installed quicker. Here is an example from the "create-react-library" \[not sure if this was supposed to be installed when we ran create-react-library]. 



\`\``

\# dependencies

/node_modules



\# testing

/coverage



\# misc

.DS_Store

.env.local

.env.development.local

.env.test.local

.env.production.local



npm-debug.log*

yarn-debug.log*

yarn-error.log*



\# Development folders and files

public

src

scripts

config

demo

.travis.yml

CHANGELOG.md

README.md

.\`\``



Now, we just have to publish this to the NPM registry. I am going to assume you have a verified NPM account via https://www.npmjs.com/signup and have configured the package.json file correctly, 



\`\``

npm login 

npm publish

\`\`` 

The first command will allow you to login to your npm account via the CLI, make sure you run the second command in the correct directory, and it will do all the work of sending your module/package to the NPM registry, Optionally, so others can preview your component in action, you can run "npm run deploy" which will deploy your application to a gh-pages repository. Note, you may have to use a different name for your NPM package to avoid triggers their spam filters. And for user-friendliness, update the README.md. 



\# Try out your component 

If all went well, go ahead and install your component from the NPM registry (as you did with react-particles-js), import your component, and wrap another component inside the component-module and watch the snow fall. Feel free to add more components. Thanks for reading.
