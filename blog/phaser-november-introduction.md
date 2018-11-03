---
path: /blog/phaser-november-introduction.md
date: '2018-11-03'
title: Phaser November Introduction
---
This month is national aviation month, so I could have blogged about many topics related to flight, such as the ups and downs of life, why it helps to see things from a bird's eye view, a physics simulation, or whatever. 

But, Instead of my wonderful wisdom, I decided just to give a really quick introduction to Phaser (2). Beginner programming knowledge will help and a basic understanding of JavaScript and HTML canvas will too. 

# What is Phaser? 
PhaserJS is a Javascript framework for developing games in the web browser - Phaser can easily be paired with other technologies like Electron and Cordova to allow for cross-platform development. Phaser requires a web server for local development, but that is beyond the scope of this tutorial, so we will just be using the Phaser sandbox web-app: https://phaser.io/sandbox - [use the "blankety blank" template] which will give us a really basic template, I will be writing code in ES5 (meaning I will be using "var" instead of "let"), just to make the getting started to process a little less painful - for the size of this project there will be no noticeable effect. Note that by no means is the code I include perfect, the idea is that once you have a foundation, you can improve yourself [and this is for fun].  

Phaser has four functions of importance. The "preload" function is for preparing our assets (images, sounds etc), to be used in the game. The "create" function is used to initiate and instantiate our game world and our game objects. The "update" function will essentially update our game, this is a function that will repeatedly be called, this is where most of our game logic will sit. And lastly, the "render" function - we will not be touching this one today. Don't worry, Phaser will call each of these functions for us. . You will notice that the Phaser sandbox has a tab for each of these, and the remaining tabs are for playing our game and Phaser's "manual". I suggest that if you want to get comfortable with Phaser sandbox, to use one of the templates other than "blankety blank", and play around in this - then come back here for some coding. 

## The Preload Function 
```js
// "preload" tab 
function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('sprite', 'sprites/phaser-dude.png'); 
}
```
The line within the function simply sets a color using a hexadecimal value. The "game.load.baseURL" would be more important if we were using a web server, this line simply just tells Phaser where to find our assets,. The line after is so that Phaser can make requests within the (and to other) server/s, and lastly, we tell Phaser to load our images, due to laziness I am just using the premade Phaser image for all my objects. 

Here is an example using different assets, that were sourced from Pexel, but you can use any assets you like so long as they are accessed via HTTP/S. 

```js
 game.load.baseURL = 'http://images.pexels.com/photos/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', '1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&h=350');
    game.load.image('platform', '1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&h=350');
```
# The Create Function 
Now that we have an asset, lets put it to use and get our game world ready. 

```js

var plane; 
var bomb;
var boat; // target 
var cursors;
var jumpButton;

function create() {

    plane = game.add.sprite(100, 20, 'sprite'); 
    boat = game.add.sprite(150 + Math.random() * 50, 600, 'sprite'); 

    game.physics.arcade.enable(plane);
    game.physics.arcade.enable(boat); 

    plane.body.collideWorldBounds = true;
    boat.body.collideWorldBounds = true; 
    
    cursors = game.input.keyboard.createCursorKeys();
    dropBombButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
```

First, we initialize our objects in the global scope -  meaning they can be accessed anywhere in our game [bad practice I know]. We then add each object to the game world (as a sprite), notice that we are also setting their initial positions, and referencing "sprite" - this is an alias for our original image asset - a size/scale  is not given as the size (as far as I know) depends on the default size of the image. We then add these sprites to the physics world, this means that they will respond accordingly to solids in our game world. We tell Phaser we wish that these objects detect the edge of the game world (the boundaries) and to also treat this is a solid (meaning our object cannot leave the view-area). Lastly, we allow Phaser to handle our game's input. Spacebar will be for dropping a bomb, and the right and left arrow keys will control the direction of the player's object (which is intended to be a plane - figured out what I was inspired by yet?). 

## The Update Function 
```js
// "update" tab 
var left = false;     
var bombExists = false; 
 
function update () {
   
    if (left) { 
        plane.body.velocity.x = -103; 
    } else { 
        plane.body.velocity.x = 103; 
    } 
    
    if (cursors.left.isDown)
    {
        left = true; 
    }
    else if (cursors.right.isDown)
    {
        left = false; 
    }
    
    if (dropBombButton.isDown) { 
        // create bomb   
        if (!bombExists) { 
            bomb = game.add.sprite(plane.body.x , plane.body.y, 'sprite'); 
            game.physics.arcade.enable(bomb);
            bomb.body.collideWorldBounds = true;
            bomb.body.bounce.set(0.4); // perhpas this could be affected by bomb and/or plane's velocity 
            bomb.body.gravity.y = 200;
            if (left) { 
                bomb.body.velocity.x = -103; 
            } else {
                bomb.body.velocity.x = 103; 
            }
            bombExists = true;    
        }
    } 
    if (bombExists) { 
        if (bomb.body.collideWorldBounds)
        
        if (left) { 
            bomb.body.velocity.x -= 0.2;         
        } else {
            bomb.body.velocity.x += 0.2;   
        } 
    } 
  
    if (game.physics.arcade.collide(bomb, boat)) { 
        boat.destroy(); 
    } 
} 
``` 

This may seem like a lot of code, but it is not - feel free to split parts of this code into smaller functions. First, we have some global variables, the "left" variable, will keep track of if our player's object should be moving left (true) or right (false). We will be creating our bomb during runtime (meaning while the user is playing the game), so the "bombExists" keeps track if our bomb has been created or not. 

We then move the player, and below this code is code that will check what key/button the player has pressed and will allow the above code to act accordingly. 

Before we can drop a bomb, we first check if a bomb has been dropped already, if so, nothing will happen. If however, the bomb has not been dropped, we will create and add the bomb to the game (similar to how we did in the "create" function. We ensure the bomb will fall downwards by giving it a gravity of 200 (Phaser will do the rest), a fact that does matter: Phaser uses a physics library called MatterJS, so to be more precise, MatterJS will do the rest. 

We then determine in what direction the player's plane object is moving and make the bomb travel in that direction. All this is done before we tell ourselves that our bomb has been created meaning this code will not run again unless the bomb somehow gets destroyed (and removed from the game). 

The next bit of code simply tells our bomb to act accordingly when it touches the edge of our game world, thus causing it to bounce - thanks to "bomb.body.bounce.set(0.4); ".  

And lastly, we check for a collision between the [target] boat and the bomb, and destroy the boat if so, meaning the player has essentially completed the game. 

## The "Render" Function 
function render() {

}

## Improvements (Yes there are many) 
I just picked numbers out of my backend when coming up with values that affect physics - you could be a bit more attentive here. I also put way too much code in the "update" function. And if you are the artsy type, perhaps those images could be your own self-made assets? And the game is somewhat too quiet. And Phaser uses object-oriented techniques - so perhaps that is something you can learn too [and achieve better code]. Thanks for reading. 


