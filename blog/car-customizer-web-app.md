---
path: /blog/car-customizer-web-app
date: '2019-03-30'
title: Car Customizer Web App
---
In this tutorial we will create a client-side web app that will allow the user to select different components to design a 2 dimensional car (or whatever you want to give the user the ability to customize). We will use JS and HTML, and I assume you have a basic understanding of these technologies. I made some (terrible) assets (images) that you can use by accessing the Repl.it at the bottom of the tutorial, but if you are passionate enough, feel free to use your own assets. We will allow the user to select the body (or colour) of the car, the wheels and whether their car has a spoiler, this should give you a good foundation to add more components. I have put my HTML inside the “index.html” file and the JS inside a “script.js” file (which was loaded into the “index.html” file) but feel free to organize your project however you see fit. 

Here is the HTML. 

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width">
   <title>repl.it</title>
   <style>
     /*
     You'll likely need to use CSS to position each vehicle component appropriately
     */
   </style>
 </head>
 <body>
<div id="car">
   <!-- Use CSS to have the car components overlapped (responsiveness not needed) -->
   <img src="body-1.png" id="body-image" />
   <img src="no-spoiler" id="spoiler-image" />
   <img src="wheels-2.png"  id="wheels-image"/>
   <!--
   <p id="body-image"></p>
   <p id="spoiler-image"></p>
   <p id="wheels-image"></p>
   -->
 </div>
 <button id="wheels-1">Wheels 1</button>
 <button id="wheels-2">Wheels 2</button>

 <button id="no-spoiler">No spoiler</button>
 <button id="spolier-1">Spoiler 1</button>

 <button id="body-1">Body 1</button>
 <button id="body-2">Body 2</button>
   <script src="script.js"></script>
 </body>
</html>
``` 

We store the information about the car inside a JS object literal. 
```js
let car = {
 wheels: "", spolier: "", body: ""
}
```

Next we need to grab the appropriate HTML elements using the querySelector method/function  and storing them inside a variable. Notice that the strings will match IDs within the HTML. 
```js
let wheels1Button = document.querySelector("#wheels-1");
let wheels2Button = document.querySelector("#wheels-2");

let noSpoilerButton = document.querySelector("#no-spoiler");
let spoiler1Button = document.querySelector("#spolier-1");

let body1Button = document.querySelector("#body-1");
let body2Button = document.querySelector("#body-2");

``` 

We cycle through each button (which are stored in a temporary array) and allow these elements to respond to click events. 

```js
[wheels1Button, wheels2Button, noSpoilerButton, spoiler1Button, body1Button, body2Button].forEach(button => {
 document.addEventListener("click", e => {
	// switch statement goes here 
 });
});
```

Next we determine what button was clicked depending on the button’s inner-text. We use a long switch statement,, for example, if the button with the “innerText” of “Wheels 1” was clicked, then we shall update our car object literal to reflect that the user requested the first type of wheel. Logging the car is optional. We are yet to implement the update-car function. This switch statement shall be placed in the previous code in place of the comment “switch statement goes here”. 

```js
   switch (e.target.innerText) {
     case "Wheels 1":
       car.wheels = "wheels-1";
       console.log(car);
       updateCar(car);
       break;
     case "Wheels 2":
       car.wheels = "wheels-2";
       console.log(car);
       updateCar(car);
       break;
     case "No spoiler":
       car.spoiler = "none";
       console.log(car);
       updateCar(car);
       break;
     case "Spoiler 1":
       car.spoiler = "spoiler-1";
       console.log(car);
       updateCar(car);
       break;
     case "Body 1":
       car.body = "body-1";
       console.log(car);
       updateCar(car);
       break;
     case "Body 2":
       car.body = "body-2";
       console.log(car);
       updateCar(car);
       break;
     default:
       document.qeurySelector("#car").innerText = JSON.stringify(car);
       console.log(car);
       updateCar(car);
   }
```

Now we have the update car function, this function expects the parameter called car - this is our [updated] object literal. We then change the “img” src to the correct image path. Look at the filenames of my images to see what I mean. We then concatenate (feel free to replace this will template literals) the “.png”, I done that just to maintain clarity, we could had also done car.body = "body-2.png"; but this will allow us to change the filetype of the image if we choose. Feel free to remove the commented out code. 

```js

const updateCar = car => {
 // update image tags according to car object
 document.querySelector("#body-image").src = car.body + ".png";
 document.querySelector("#spoiler-image").src = car.spoiler + ".png";
 document.querySelector("#wheels-image").src = car.wheels + ".png";
  // paragraph tags are for develoipment purposes
 /*
 document.querySelector("#body-image").innerText = car.body;
 document.querySelector("#spoiler-image").innerText = car.spoiler;
 document.querySelector("#wheels-image").innerText = car.wheels;
 */  
 console.log("Updated car");
}
```  

And that is it, admittedly I could had gone more in depth into the code, but I would rather you gain the satisfactory feeling of understanding the code yourself. If anything went wrong, here is the final example: https://repl.it/repls/PungentOrganicLegacysystem  - where you can get my terribly made assets. One last thing, I was lazy so the components of the car are poorly positioned, you can probably use CSS to have these positioned correctly, bonus points if you can make it responsive - I might update the Repl.it with CSS. Thanks for reading. 

