---
path: /blog/html-js-chuck-norris-app
date: '2019-01-05'
title: HTML JS Chuck Norris App
---
In this tutorial, we will use "fetch", a JSON API and the Webspeech API (which may soon be deprecated or altered to require user activation), to make a webpage that will read aloud a random statement about Chuck Norris. 



Here is the base HTML. 

\`\``html 

<!DOCTYPE html>

<html>

<head>

\    <meta charset="utf-8" />

\    <meta http-equiv="X-UA-Compatible" content="IE=edge">

\    <title>Chuck Norris</title> 

</head>

<body>

\    <div id="joke">

\    Click the button to get a phrase about Chuck Norris 

\    </div>

\    <button id="button">Get Chuck Norris Joke</button>

\    <script> 

	window.onload = () => { 

		// JS goes here 

	}

\    </script>     

</body>

</html>

\`\`` 



\# Getting the data 

This is the documentation page http://www.icndb.com/api/ for the API we are going to use. Inside the script tags (or an external file), put the following code inside the "window.onload" function (so that the code waits for the document to load before executing the code). 

\`\``js 

\    document.querySelector("#button").addEventListener("click", e => {         

\    fetch("http://api.icndb.com/jokes/random").then(res => res.json()).then(data => { 

\    let text = data.value.joke; 

\    document.querySelector("#joke").innerText = text; 

\    }); 

\    }); 

\`\`` 

The above code will, check for a click event on the HTML button, then send a fetch request to an API that will return us a randomly select phrase about Chuck Norris, the code will then set the text of the  div element with the ID of "joke" to the phrase that was retrieved within the fetch request. 



\# Speaking the data 

Now that we have our data, we will use the Webspeech API to "speak" the data. 



\`\``js 

\    const speak = text => { 

\    const synth = window.speechSynthesis; 

\    let voices = \[]; 

\    voices = synth.getVoices(); 

\    const speakText = new SpeechSynthesisUtterance(text); 

\    const voice = voices\[0]; 

\    speakText.voice = voice; 

\    speakText.rate = 1; 

\    speakText.pitch = 1; 

\    synth.speak(speakText); 

\    } 

\`\`` 

This function, expects the parameter/argument called "text" \[which will be the data from the JSON API, it will then ready the Webspeech API which is built into the desktop browser (do not expect this code to work on all browsers). We get and store within our array of voices that the browser contains, Then an instance of the "SpeechSynthesisUtterance" is invoked, so that the browser knows what text is to be read aloud [or spoken], we passed the appropriate text during the instantiation (when the object is created). Next we pick a voice, and lastly we tell the browser to "speak". Feel free to play around with the index of the voices array, aswell as the rate (speed) and pitch of the voice. 



\# All together now 

Now, we just have to invoke (call) the speak function when the data has been received. Here is the final code. 



\`\``html

<!DOCTYPE html>

<html>

<head>

\    <meta charset="utf-8" />

\    <meta http-equiv="X-UA-Compatible" content="IE=edge">

\    <title>Chuck Norris</title> 

</head>

<body>

\    <div id="joke">

\    Click the button to get a phrase about Chuck Norris 

\    </div>

\    <button id="button">Get Chuck Norris Joke</button>

\    <script> 

\    window.onload = () => { 

\    const speak = text => { 

\    const synth = window.speechSynthesis; 

\    let voices = \[]; 

\    voices = synth.getVoices(); 

\    const speakText = new SpeechSynthesisUtterance(text); 

\    const voice = voices\[0]; 

\    speakText.voice = voice; 

\    speakText.rate = 1; 

\    speakText.pitch = 1; 

\    synth.speak(speakText); 

\    } 



\    document.querySelector("#button").addEventListener("click", e => {         

\    fetch("http://api.icndb.com/jokes/random").then(res => res.json()).then(data => { 

\    let text = data.value.joke; 

\    document.querySelector("#joke").innerText = text; 

\    speak(text); 

\    }); 

\    }); 

\    } 

\    </script>     

</body>

</html>

\`\`` 



\# Thanks 

This code is not perfect, for example, the webspeech API will not immediately begin reading the new text when a new phrase has been received, instead, it will build up a queue and continue to read the text until there is no more, at which point you can have it read more text. Plus, I only focused on the HTML and JS, feel free to add your own CSS, and any more improvements you would like to do.
