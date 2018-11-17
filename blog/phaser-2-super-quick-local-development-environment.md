---
path: /blog/phaser-2-super-quick-local-development-environment
date: '2018-11-17'
title: Phaser 2 Super Quick Local Development Environment
---

Recently, I made a tutorial about getting started with Phaser, however, I simply used Phaser's web sandbox, meaning we did not have to fuss around with configuring stuff. In this tutorial, I will demonstrate what I consider to be a quick way to begin developing games locally - that is, using tools installed on your computer, such as VSCode etcetera. This tutorial is aimed at Phaser 2 (for ease), but theoretically should work with Phaser 3, see: https://cdnjs.com/libraries/phaser - I will hint where to put this later. 

I assume you know what Phaser is, as well having a basic understanding of web-servers. This code is partly inspired by Phaser's "hello world" tutorial, https://phaser.io/tutorials/getting-started-phaser2/part6 - knowledge of the command line will be useful too. 

# What We Need 
Firstly, we will need a web server, this has something to do with how Phaser handles assets. We will use an NPM package called "http-server". Meaning we will need Node, we will then obtain Phaser via CDN [central-delivery-network] 

# Installing Node And NPM 
Node is a tool that allows Javascript to run on the machine as opposed to being constrained to a web browser. Node will allow us to use the "http-server" - a convenient little local web server. NPM stands for Node-Package-Manager and allows developers to easily manage their packages/libraries. Simply navigate to this https://nodejs.org/en/ website and install whichever version you like (preferably the recommended version) of Node you like. The installation wizard will simplify the process. You can ensure Node is installed by running "node -v" in the command prompt/terminal. 

# Setting Up Our Project 
We will make a simple template that can be re-used. Simply create an HTML file called "index.html", and paste in the following code. Ensure this file is in a directory [folder] with an appropriate name such as "phaser-template". 

```js
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>hello phaser!</title>
	<!-- if you want Phaser 3, replace the src's value with Phaser 3's CDN --> 
        <script src="//cdn.jsdelivr.net/phaser/2.5.0/phaser.min.js"></script>
    </head>
    <body>

    <script type="text/javascript">

window.onload = function() { 
    var gameWidth = 800, gameHeight = 600; 
    var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {
        game.load.baseURL = 'http://127.0.0.1:8080/'; // this link will appear later in this tutorial 
        game.load.crossOrigin = 'anonymous';
    }

    function create() {

  }

    function update() {

    }
   
    function render() {

    }
}; 
    </script>
    </body>
</html>
```
## Installing http-server 
https://www.npmjs.com/package/http-server
Next, we need to serve our file/s. Simply run the following command inside a command prompt/terminal. 
```
npm install http-server -g
```
Now, if we navigate into the directory containing our "index.html" file,  and ensuring we are inside this directory ina command line process, by doing something such as "cd phaser-template". And then run the following command. 

```http-server``` 

You may recognize that one of the hyperlinks that http-server outputs is inside our code, so we will navigate to this hyperlink: "http://127.0.0.1:8080/". And this is where our Phaser game is. 

# Congratulations, Now Develop A Game 
Now, you probably will not see any content, but theoretically, if everything went well, you are now able to begin developing your game (or following one of my tutorials, or the many other Phaser tutorials out there such as those on the Phaser website). I made a lot of assumptions in this blog post, and chances are that if you have familiarity with Node (or any serverside development) then it would feel like a walk in the park to you. Don't worry if this was daunting, do not hesitate to Google what you do not feel comfortable with. I strongly recommend you look into using a better Phaser setup (there are many out there, check out the ones on Github), as this one will begin to feel very tediously limiting soon. 
