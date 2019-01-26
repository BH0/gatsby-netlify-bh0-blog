---
path: /blog/i-predict-a-riotjs
date: '2019-01-26'
title: I Predict A RiotJS
---
We will learn how to use RiotJS - a lightweight component library to make reusable HTML user-interfaces easily, similar to ReactJS and Vue, if you know these frameworks, Riot will be a breath of fresh air, but if not, then so long as you are comfortable with ES6 (modern JavaScript), really just template literals, objects,  arrow functions, and HTML, you should be good. 

I like Riot because it allows me to make reusable HTML without feeling overwhelmed. We will use Codepen for a quick + easy minimal setup, Codepen is an easy to use in-browser code-editor for frontend developers, it supports live/hot reloading which means that your app will be re-rendered after each code edit  (as opposed to refreshing + re-running the webpage/code manually). 

Below I have linked tutorials which will help you get set up to use RiotJS as if you would in a production app - we will be writing RiotJS as JavaScript but you can write it in a "JSX" (React-term) like fashion then use provided tools (such as the Riot CLI) to convert your components into JavaScript. If you are an experienced developer you will probably be better of skipping straight to them, but if you dislike when you try to use something new quickly and things break even in the setup process (this happens to e more than I'd like to admit), then this tutorial will be your friend. 

To get started simply navigate to https://codepen.io/pen at click the settings tab, click the JavaScript tab, and inside the search input field, that says "Search CDNs", type "riot", then select the option that simply says "riot". This will load the RiotJS library behind the scenes via CDN. But later, we will learn how to set up a local environment to get the most out of Riot. Be aware the Codepen will create our typical HTML boilerplate behind the scenes, meaning we just need to put our custom HTML. 

In the CSS section, put the following CSS. 
```css
.red { 
 color: red; 
} 

.blue { 
  color: blue; 
} 
```

Now in the JavaScript tab, we are going to use the tag method which belongs to RiotJS, the first parameter/argument we give it is the name of our component, in our case "hello-world", then we give it the HTML we want to render, for this, we will use template literals so we can use string interpolation, and have our HTML on separate lines for readability. The last argument will be covered later, for now, as we do not need it, we will just put an arrow function that has the parameter "opts" and returns "null". 

```js
riot.tag("hello-world", 
        `
            <div>
              <h1>HELLO</h1> 
            </div> 
        `, opts  => null); 
``` 

Now in the HTML, we can render our component, for it to be displayed on the webpage.  Similar to we write HTML, we simply give our component an opening tag, and a closing tag, and inside the two tags, put what we want to be displayed on the webpage. 

```html 
<hello-world>friend</hello-world> 
```

You should expect nothing to see nothing, this is because we have not told Riot that we wish to display our component, to do this, we have to "mount" - or attach it to the document object model. Similar to React's [ReactDOM's] render method. 

```js 
riot.mount("hello-world"); 
``` 
Now, this is pretty much useless, let's use the power of JavaScript to truly utilize reusable ("DRY") HTML. We can give our custom component's attributes, to allow us to, for example, give it different text. 

```html
<hello-world text="codepen"></hello-world> 
``` 
We will need to update our component to recognize this attribute, plus we are hard coding the value this should be changed. By using the opts (short for "options", I believe)  parameter we gave to our component - which is an object, we can get the property, (attribute)  called text, The "opts" parameter is similar to React's concept of props (which I believe to be short for "properties"). 

```js
riot.tag("hello-world", 
        `
            <div>
              <h1>{opts.text}</h1> 
            </div> 
        `, opts  => null); 
``` 

We can give default values to our components, that can then be overridden by passing an object to the "mount" method, this object will contain the attribute we wish to edit, and it's appropriate text, meaning that if we do not give the component the text attribute, then by default it will say "riot". 

```js 
riot.mount("hello-world", {text: "riot"}); 
```

I opted to use string interpolation and had we covered event handling, then our opts function would look different, so here's some code for clarity, but I will not be covering event handling in this tutorial (though see the links below which do). 

```js
let math = 32 * 32; 
riot.tag("hello-world", 
        `
            <div>
              <h1 class="red">{opts.text}, ${math}</h1> 
            </div> 
        `, opts  => {
    console.log(opts); 
}); 
riot.mount("hello-world", {text: "hello", class:"red"}); 
```
And you could do something interesting with styling, by giving your element's default classes, but you might disagree with this. 

```js
let math = 32 * 32; // notice this is the same name as our CSS selector 
riot.tag("hello-world",
`
<div>
<h1 class="{opts.class}">{opts.text}, ${math}</h1> 
</div>
`, opts => {
console.log(opts);
}); 
riot.mount("hello-world", {class: "red", text: "riot"}); 
/* 
Corrsponding  HTML: 
<hello-world></hello-world> 
<hello-world text="codepen"></hello-world> 
<hello-world class="blue" text="codepen"></hello-world> 
*/ 
```

# Let's [Go] Riot 
Now that you are aware of RIot and I believe you are capable of learning it. I intend on doing tutorials on how to build some interesting application's with Riot, but there are a few good videos (and the official website) which will help you learn the library in depth. 

Links: 
 * https://www.youtube.com/watch?v=al87U6NgRTc 
* https://www.youtube.com/watch?v=al87U6NgRTc&list=PLVU7sJxpeY53DKc2WIo3CFxewf9Ek-Hmo 
* https://riot.js.org 

# Visit the RIot website 
I have given you a basic introduction to Riot, demonstrated how intuitively easy it is to use, and what it is for, but I believe their official website describes best and will help you decide why you would wish to use Riot for a proper project, the website will help you learn better https://riot.js.org and figure out just what makes Riot unique. 

