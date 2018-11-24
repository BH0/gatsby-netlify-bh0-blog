---
path: '/blog/distributing-phaserjs-[client-side only]-games-via-itch-io'
date: '2018-11-24'
title: 'Distributing PhaserJS [Client-side only] Games Via Itch.io'
---
In this tutorial, we will use Itch.io - a popular game distribution website to distribute our PhaserJS [2] game easily This tutorial builds on my "Phaser 2 Super Quick Local Development Environment " tutorial. And is aimed at Phaser 2, but may also work with Phaser 3. 

## Warning 
We are going to use "window.location.href", as far as I can tell, we will be using this property safely, but be careful if you continue to use this property in other parts of your code, as it may open your application up to cross-site-scripting. 

# Our Game 
I assume you have your own game or at least the basic template that I had given in the previous tutorial, but if not, here is the foundational code for the tutorial. 

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>hello phaser!</title>
        <script src="//cdn.jsdelivr.net/phaser/2.5.0/phaser.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">

         window.onload = function() { 
            var gameWidth = 800, gameHeight = 600; 
            var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

            function preload() {
                game.load.baseURL = 'http://127.0.0.1:8080/'; 
                game.load.crossOrigin = 'anonymous';
                game.load.image('test', 'test.png');
            }

            function create() {
                var sprite = game.add.sprite(0, 0, 'test');
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

## Loading Our Assets Within Itch.io 
In our template, we used `game.load.baseURL = 'http://127.0.0.1:8080/';`, as we were hosting our files locally, and this is the hyperlink provided by our http-server (Node module). But, Itch.io uses a different server, and thus the hyperlink that Itch.io  uses will be different, and its unlikely we are going to know this hyperlink in advance, so we need to replace that code with something more flexible, this is where we can use "window.location.href", this property will tell us the current URL of the browser, so if it is obtained within our Itch.io game's page, then that would mean the URL is the hyperlink that Itch.io server is using. 

But, "window.location.href", will also output the filename, such as "http://127.0.0.1:8080/index.html", we do not want the filename, so we simply using the "replace" function to cut this part out. Meaning, the resultant code will become: 
```js
                var url = window.location.href.replace("index.html", "");
                game.load.baseURL = `${url}`; 
``` 

Here, I have used ES6 template literals, in the previous tutorial I had opted to use ES5, so if you would rather your entire codebase be ES5, then simply use the following code. 

```js
                var url = window.location.href.replace("index.html", "");
                game.load.baseURL = ''+url; 
``` 

Now, to load our assets, our preload function simply becomes: 

```js
            function preload() {
                var url = window.location.href.replace("index.html", "");
                game.load.baseURL = `${url}`; 
                game.load.crossOrigin = 'anonymous';
                game.load.image('test', `${url}/test.png`);
            }

            function create() {
                var sprite = game.add.sprite(0, 0, 'test');
            }
``` 
Or for ES5: 

```js 
            function preload() {
                var url = window.location.href.replace("index.html", "");
                game.load.baseURL = ''+url; 
                game.load.crossOrigin = 'anonymous';
                game.load.image('test', url + 'test.png');
            }

            function create() {
                var sprite = game.add.sprite(0, 0, 'test');
            }
```

## A Complicated But Likely Not Important Tidbit 
The "window.location.href" is a client-side targeted property, there is a similar function in Node (server-side) that accomplishes the same result, which is ```__dirname``` and/or ```__filename```, https://nodejs.org/docs/latest/api/globals.html#globals_dirname - which may come in handy if you are pairing Phaser with Node (such as Sockets.io and/or ExpressJS).... Or perhaps you are somehow rendering your game server-side. If this is the case, a tool called "Now" by "Zeit2 may come in handy. If you simply wish your game to be client-side only, then this information is not important to you. 

# The Final Code 
```js 
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>hello phaser!</title>
        <script src="//cdn.jsdelivr.net/phaser/2.5.0/phaser.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">

         window.onload = function() { 
            var gameWidth = 800, gameHeight = 600; 
            var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

            function preload() {
                var url = window.location.href.replace("index.html", "");
                game.load.baseURL = `${url}`; 
                game.load.crossOrigin = 'anonymous';
                game.load.image('test', 'test.png');
            }

            function create() {
                var sprite = game.add.sprite(0, 0, 'test');
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

# Preparing Our Files To Be Uploaded To Itch.io 
We are going to have to compress our files into a directory before they can be uploaded to Itch.io. I am on Windows 10 so I would simply right click my project's folder, and however over "send to" then click "compressed zip folder". 

# Uploading To Itch.io 
Now we are going to have to upload our code and assets to Itch.io, as a project. First, you will need an Itch.io account, simply create one. 

After you have signed in to your Itch.io account, navigate to "upload new project". Fill out the appropriate input fields, Make sure you set "kind of project" to "HTML". And under "Uploads", select "upload files" and choose the compressed folder containing your project. And ensure to check the box "this file will be played in the browser". And ensure you set the correct viewport dimensions, in the code I have set the width and height (via the "gameWidth"/"gameHeight" variables) to 800x600. 

Assuming you have filled everything out correctly, click "save" then "view page", if everything went smooth, within a couple of minutes, you will be able to test your game via its Itch.io webpage, when you are ready for the public to see your game, On your game's webpage, you can simply click "edit game", then scroll back down to the bottom of your page and select the "publish" (instead of "draft"), radio button. Then click "view page" again. And your game should be ready for the world to see. 

# Congratulations 
You can now share your PhaserJS game with your friends, family etcetera. Note, that you may feel your webpage looks a bit boring, you can customize the webpage but that is beyond the scope of this tutorial. Thanks. 
