---
path: /blog/automated-nodejs-sms-text
date: '2018-12-29'
title: Automated NodeJS SMS Text
---
At the time of writing this, the new year (2019) is approaching, and instead of having to text each person individually, to wish them a happy new year, I will teach you how to write  a program that does that for you, so you can get stuck into the new year without any time wasted - or at least squeeze an extra drink in. We are going to use NodeJS, and the Clockwork API, I assume you have basic NodeJS knowledge. 



\# The Code 

Here is the code, which I will break down and describe afterward. This code will not work immediately because the numbers are fake, and there is no API key. 

\`\``js

const clockwork = require('clockwork')({key:'your-api-key-will-go-here'});

const dayNumber = 31; 

const hour = 24; 

let textMessageSent = false; 



const sendTextMessage = (toAndContentAsArrayOfObjects) => { 

\    clockwork.sendSms(toAndContentAsArrayOfObjects, 

\    (error, response) => {

\    if (error) {

\    console.log('Something went wrong', error);

\    } else {

\    console.log('Message sent',response.responses\[0].id);

\    }

\    }); 

};



while (!textMessageSent) { 

\    const date = new Date(); 

\    if (date.getHours() == hour) { 

\    if (date.getDate() == dayNumber) { 

\    console.log("Sending text message"); 

\    sendTextMessage([

\    { To: '447xxxxxxxxx6', Content: 'Happy new year test1'}, 

\    { To: '447xxxxxxxxx6', Content: 'Happy new year test 2'},

\    { To: '447xxxxxxxxx6', Content: 'Happy new year test 3'},

\    ]); 

\    textMessageSent = true; 

\    }

\    } else { 

\    console.log("it is not yet the new year"); 

\    } 

} 

\`\``

\# Project Setup 

Run "npm init" and type in the appropriate fields. 



The Clockwork API can be used as an NPM package, simply install it using this command: "npm install --save clockwork". 



Here is my package.json. 

\`\``js 

{

  "name": "new-year-text-messenger",

  "version": "1.0.0",

  "main": "index.js",

  "license": "MIT",

  "dependencies": {

\    "clockwork": "^0.1.4"

  }, 

  "scripts": { 

\    "start": "node index"

  }

}

\`\`` 



\# Setting up Clockwork API 

We need an API key (and some credit) to use the Clockwork API. Sign up here https://app3.clockworksms.com/signup - once you have verified your email, log in to your Clockwork account. 



It costs to use the Clockwork API, but Clockwork provides a free 50p (as in British pound sterling) that you can use, click on the "Free credit" button and verify yourself by providing your mobile number (and following the Clockwork provided instructions).  



I believe the Clockwork API costs 4p per text message, so unless you are willing to pay, make sure you do not exceed the 50p limit, I am not sure if the API will proceed to send messages up until you run out, or if it will realize you are in need of more credit and not send any messages at all. 



\# The Code Explanation 

The following code will allow us to access the Clockwork API, this is an example of currying - which basically means the function will receive arguments progressively instead of all at once. Do not forget to input your own API key as a string obtained by the Clockwork website. 

\`\``js

const clockwork = require('clockwork')({key:'your-api-key'});

\`\`` 



We set the constant (a never changing variable) dayNumber to 31 - this is the 31st day of the month (which is the day before the 1st of January), for testing purposes you are welcome to make this the current day for you. The hour constant is the 24th hour of the day, that is essentially midnight (assuming your clock uses 24 hour time), again, you might want to change this to the current hour for testing purposes. We are going to want our code to continuously run, there is possibly a better way of doing this, but my simple solution is to use a while loop that will check the value of a boolean variable (true will mean the message has been sent and false will mean the message has not yet be sent). 

\`\``js

const dayNumber = 31; 

const hour = 24; 

let textMessageSent = false; 

\`\`` 

Next, we create a function (which is stored in a constant), this takes the parameter/argument of "toAndContentAsArrayOfObject" - this will become clearer soon. When this function is called, the Clockwork API will attempt to send our text message and will log whether the message (or messages) was successfully sent, as a bonus task you might want to replace the console.logs with a text message to yourself.  Notice that we have two parameters/arguments, one is a variable, the other is a function - this is an advanced (but essential) JavaScript topic known as asynchronous programming \[accomplished via callbacks but there are newer solutions to this]. 

\`\``js

const sendTextMessage = (toAndContentAsArrayOfObjects) => { 

\    clockwork.sendSms(toAndContentAsArrayOfObjects, 

\    (error, response) => {

\    if (error) {

\    console.log('Something went wrong', error);

\    } else {

\    console.log('Message sent',response.responses\[0].id);

\    }

\    }); 

} 

\`\``



Given that if "textMessageSent" is true, then we do not want to send our text message, we can use a while loop, to repeatedly check the value of this variable, and determine if we can send the message, We then instantiate an instance of the Date object - that is we give our self-access to the Date object's code, this \[I believe] will use the system clock (your computers built-in clock), so you might want to double check that your computer's clock is the correct time. Before we check that we can send the message, we only want to send the message on the new year (at the "bells") - so we have to use the "getHours" and "getDate" methods to check if it is the desired time. We then call our previously defined "sendTextMessage" function, before telling our program that the text message has been sent, at which point the while loop will be finished.  

\`\``js

while (!textMessageSent) { 

\    const date = new Date(); 

\    if (date.getHours() == hour) { 

\    if (date.getDate() == dayNumber) { 

\    console.log("Sending text message"); 

\    sendTextMessage([

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'}, 

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

\    ]); 

\    textMessageSent = true; 

\    }

\    } else { 

\    console.log("it is not yet the new year"); 

\    } 

} 

\`\``



Notice the array of objects containing the mobile numbers as strings, as well as the content (the text message), this is data will be passed in place of our toAndContentAsArrayOfObjects parameter. Do not forget to include the country code within the mobile number/s. 



\`\``js

\    sendTextMessage([

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'}, 

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

\    ]); 

\`\`` 



\# Memory Leak (feel free to skip) 

This topic might be too complicated, so you are welcome to skip this step and the code will still work, but for those who want to get all computer sciencey, stick around. 



As you are probably aware, when we run code, and instantiate objects, we are instantiating them in something called "memory" (RAM). This memory is limited, so if we instantiated more objects than the computer can handle, then we would be causing something called a "memory leak", JavaScript has something called a garbage collector - this is just a program that gets rid of instantiated objects that are no longer needed. Thus, as far as I know, there is no proper way to manually delete objects in JavaScript (the "delete" operator does not do this). 



In our previous code, we are causing a memory leak, now, technically it is not noticeable, thus for our use case you don't need to worry. But here is a better version of the program (given to me by an excellent person), that I encourage you to try and understand yourself. Here is a hint, the setInterval function is not a loop, however, the JavaScript (Node) engine uses an event loop, this event loop will see that the setInterval function needs to run every second (1000 milliseconds), and thus an instance of the date object will be created, do some stuff, then allow the garbage collector to delete the date object as it is no longer within the scope, and proceed to the next instruction - which in our case, will be the setInterval function again \[warning: I may have butchered that explanation]. 



\`\``js

const clockwork = require('clockwork')({key:''});

const dayNumber = 31; 

const hour = 24; 



const sendTextMessage = (toAndContentAsArrayOfObjects) => { 

\    clockwork.sendSms(toAndContentAsArrayOfObjects, 

\    (error, response) => {

\    if (error) {

\    console.log('Something went wrong', error);

\    } else {

\    console.log('Message sent',response.responses\[0].id);

\    }

\    }); 

} 



let handle = setInterval(() => {

\    const date = new Date();

\    if (date.getHours() === hour && date.getDate() === dayNumber) {

\    console.log("Sending text message"); 

\    sendTextMessage([

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'}, 

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

\    { To: '447xxxxxxxxx6', Content: 'Happy new year'},

	 ]); 

\    clearInterval(handle);

\    } else {

\    console.log("it is not yet the new year"); 

\    }

}, 1000); 

\`\``



\# Deploying with Now 

We can use \[Zeit's] Now, a simple CLI tool that allows us to deploy our app for free, meaning we need not run the app on our development machine but instead someone else's server, this means we need not worry about our machine losing power and turning off or whatever, as servers are designed to be much more reliable.  



But, the time might be inaccurate, as I mentioned earlier, the "Date" object uses the system clock, and I believe the "Now" server that will run our code may be in a different country than your machine, so it might have a different time. There is a simple workaround to this, and it is thanks to something called "UTC", simply replace "date.getHours()" and "date.getDate()" with  "date.getUTCHours()" and "date.getUTCDate()". 



Firstly, create an account with Now here https://zeit.co/signup. 



To install Now, run "npm install -g now", then type "now login", you may need to verify/confirm your account via email, which is surprisingly easy. The email might not appear in the correct email folder, so you may need to search for it (using the keywords "now" and/or "zeit"), Now inside the root directory of your project (where the "package.json" sits), simply type "now". Note: you may need to manually exit the now deployment process (after a few seconds) using "ctrl+c" or "cmd+c". 



This will deploy your application to a server, but since you probably don't want your application to run for eternity, you simply type "now rm app-name", to find out the name of your app, simply type "now ls". So, in my case I would type "now rm new-year-text-messenger", to stop the server running my code. 



\# Congratulations (I hope all went well) 

There has been a lot of information in this tutorial, and much more that I deliberately avoided giving. Now you just have to input each person's mobile number and the content you wish to text them into the code (perhaps you could automate this too?). Happy new year and thanks for reading!
