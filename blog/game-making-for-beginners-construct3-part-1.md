---
path: /blog/game-making-for-beginners-construct3
date: '2018-12-08'
title: Game Making for Beginners (Construct3) - Part 1
---
Before I got into programming, I was afraid to program, but wanted to make games. Construct3 is an excellent tool that allows me to make games without programming if you have heard about Game Maker (what I started with), Scratch, or Stencyl etcetera alternatives, you have probably heard about Construct. 



I am keen to learn more about Construct3 particular because of its relationship with JavaScript but don't worry, no programming is needed (though it will definitely help) for this tutorial. This will be a really simple and shallow overview of the web browser-based game development tool. 



\# Basic Terminology 

\## Game Objects (Sprites) 

Game objects are essentially anything in your game, they can be sprites (at an abstract level), an example of a sprite can be an enemy. Objects contain properties. Objects can even be made of other objects (composition), Humans as an object (not that we humans should be objectified) I contain an "eye", the eye object contains a property, such as "eye-colour", an eye-color's value could be "brown". Objects also include "behaviors", these behaviors (if you have programming experience, you may know them as methods) can be "look", "eat", properties are what object's have, and behaviors are things objects can do. 



\## Game World (Layout) 

I believe in Construct3 a layout is like a container for your game objects. I tend to just call this my game world, scene or the "viewport". 



\## Event Sheets 

I touched on behaviors, behaviors are essentially premade event sheets. And events are, well, events. They are things that can happen, such as the player pressing a key on the keyboard - events have actions - an action is this place may be to move the player's sprite. 



\## Player 

I may be referring to the actual user (the person playing our game), or the user's sprite - that the person playing our game will control. 



\## Input 

Input - when the player does something such as clicking. 



\## Game Mechanics 

These are what will make up the game's gameplay, examples of mechanics are shooting, jumping etcetera. 



\## Much more 

That I will explain when appropriate 



\# Our Game's Brief 

In game design/development, we almost always start with the brief, this is essentially just an overview of what our game will be, you can be as detailed as you wish with this (and that depends on your circumstances). Our game will be a simple platforming game, where the game world will contain "targets", the player can shoot these targets to score points, and our player's sprite and our sprite's bullets will involve a "screen wrap" feature (like in Asteroid's), and bullets will reset our player's current score to zero when they touch the player's sprite - this will make our game a tiny bit more challenging and will play nicely with the screen wrap behavior. 



\# Set up 

Construct3 requires essentially zero set up. Simply, open a web browser - preferably Google Chrome, and navigate to construct3.net and click "free trial" \[I should note that Construct3 offers padi features but we will not be using any of these today]. Scroll down and click "launch now". In the recently opened tab, click "New project". Name your project and leave the rest of the fields as default. 



\# Our Player 

\## Creating A Sprite 

Right-click the "Object types" folder (to the right of the screen), and click "Add new object type". Search for or scroll down to "sprite", and click on icon"Sprite" icon then name your sprite "Player", and then click "Insert". Click on the white box (the canvas), and this will open up a "Paint" window (similar to MS Paint). Draw the image for your player - I just drew a box and filled it with a color. Then click the "X" \[close] button in the top right corner of the paint window. This will add our object to the game. I resized my sprite to make it fit on the screen better. 



\## Adding Our Behaviors 

In the properties window \[to the left of the screen], scroll down to the behavior's area, and next to "add / edit" click the "behaviors" link. Then "add new behaviors". Scroll down to or search for "Platform" under "Movements". This will enable our player to move as expected inside a basic platformer. 



\# Adding Platforms 

Our player will simply fall into a bottomless pit, so let's add some platforms. Simply, do the same thing and add a new sprite - make the sprite look like a rectangle (or any other suitable platform). To the left of the magnifying icons, the "outward pointing" arrows will allow you to change the size of your sprite, set the pixels to something like 64 pixels in width, and 32 pixels in height. Then you can resize the sprite to a suitable size once you add it to the game world. Add the "Solid" behavior - this will stop our player from being able to go through the platform sprite. You can duplicate the platform object by highlighting the sprite and then copy + pasting (as you would in pretty much every other program). And inserting the new object. You might need to make use of the scrollbars. 



\# Testing Our Game 

If we click the "play" button (looks like an arrow-end pointing to the right), we can test our game, you may have to press "try again", on a "Popup blocked" icon. 



\# Editing  A Property's Value 

I do not like the default jump height of our player, to change this, click on your player's sprite and scroll down to the "behaviors" area on the "property window". Inside the "platform" area, you can see the value for our player's jump height - called "jump strength" - change this to something appropriate for your game (depending on how you positioned your platforms). Feel free to play around with the other "Platform" properties, perhaps even enabling "double jump". 



\# Bullets 

Add a "Bullet" sprite. Give the sprite the "Bullet" behavior. To make things more interesting (and challenging for the player), I enabled "Bounce off solids" and increased the "Acceleration" and "Speed" properties. Add the "wrap" behavior. 



\# Adding Input (To Shoot) 

Add a new object, and give it the "Keyboard" type under "Input". Don't worry about this being visible. 



\## Event Sheets 

\### Shooting the bullet 

Now we have our player object, our bullet object, and our platform object, before we add the target object - we need to give the player the ability to shoot. Feel free to rename, and edit the default event sheet by double-clicking it. Click "add event", Click "Keyboard", then click "Next". Remember that event sheets can be used to make "behaviors". Click "Key is down", "press to choose" and select the "space" key by pressing "space" (or whichever key you'd like).  Then click "done". Then click "Add action" \[next to your newly created event]. Select the "Payer". Then select "spawn another object" under "misc". Click "Click to choose" and select the "Bullet". Now if we press the space key \[in my case], our player will shoot the bullet. 



\### Colliding with the bullet 

Usually, I would the player's object check for the collision, but because by default, our bullet will be on the player to begin with, when the player shoots - meaning the bullet is impossible to dodge, and the easiest way to fix this (as far as I know) is simply to tell the bullet not to detect for collisions when it has first been created, then the bullet will check for collisions when it is safe to do so. To get back to the original view, where we can see our game world (the layout), you should be able to press the appropriate tab within Construct3.  



Create another event, the event is for the "Bullet", and is "compare distance traveled", use the "dropdown menu" to set it to "> Greater than", and make the value 20 (this will vary depending on the size of your sprite). Right-click slightly to the left of the Bullet event, hover over "Add" and click "Add sub-event", this time make the event, "On collision with another object", and select the "Player". Add an action for the "Bullet", and select the "Destroy" action. Now when we test our game, we can shoot, and then collide with our own bullet. 



\# Targets 

Add another sprite, which is to be your target object.  Add the "Sine" \[movement] behavior, and set the "Movement" property to "vertical", personally, I am considering making the target object teleport to a random location at a random time or something else to make the game much more challenging, but for now, this will do. Create an "on collision with another object" event, and make the "Target" object destroy itself, and the "Bullet" when a collision occurs (remember that a collision is when an object meets another object). 



\# Saving Your Project 

We have a simple game, now to save your project so you can make improvements in the future, click "Menu", hover over "Project", hover over "Save as" and select either "Cloud drive", "Save to Local Browser", or "download a copy".  "Save to local browser" may not work if you are in private mode, and will not work on other devices - as well as different web browsers, so I like to save to my Google Drive by selecting "Cloud", then selecting "Google Drive" (or any of the other cloud storage providers) as a service, and saving to my Google account, meaning I can work on the project just about anywhere (with access to a suitable computer). 



\# What Next 

Notice, that unless our bullet collides with a target or our player, it will never be destroyed, perhaps you can make it so that the bullet (or the system) will destroy itself after a certain amount of time. And we can only shoot towards the right, I recommend you change this and then disallow the bullet to pass through the platform. In a future post, I will demonstrate how to implement score, and thus a points-system, and I intend on demonstrating how to distribute your game. Feel free to tweak the property values and refine your game's gameplay. Perhaps adding in some assets.
