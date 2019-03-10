---
path: /blog/html-js-pathify-automating-netlifycms-path-creation
date: '2019-03-09'
title: HTML JS Pathify (Automating NetlifyCMS Path Creation
---
This blog is currently using NetlifyCMS as the content managmenet system, and is statically generated via GatsbyJS. I figured, I would demonstrate a simple little Javascript program that will turn a "title" for a blog post, into the blog post's path in a format that I like, and share it with you for you to edit and use. 

Gatsby (and thus Netlify) requires your blog posts to exist at a given path. Netlify provides an input field for a title, and an input field for a path, my paths are to follow the convention of "/blog/blog-name" - and are essentially just my title with dashes instead of spaces - this is the part we will automate. 

Here is the HTML we will be working with. 

```html
<input type="text" id="input" /> 
<button>Pathify</button> 
<h1 id="final"><h1>
```
All of our code will sit inside an event listener which will fire after the "Pathify" button was clicked. 
```js
document.querySelector("button").addEventListener("click", e => { 
    // pathify code 
}); 
```

We want to get the value of the input field and turn the words into an array of words, each element of the array will be determined by a space character, so "hello friend", will become "["hello", "friend"]". 

```js
  let input = document.querySelector("#input").value.split(" "); 
```

We then want to push each word into an array but put a "-" [dash] between each word. With this code, there will be a trailing dash - I am yet to figure out how to prevent this (not to mention there are likely alternative versions of this code).

```js
  let filePath = []; 
  input.forEach((word, index) => { 
    filePath.push(word, "-"); 
  }); 
``` 

Next we want to turn the array into a string and get rid of the commas in between, notice the regular expression. 

```js
  let withoutCommas = filePath.join().replace(/,/g, '');
``` 

Now we can simply append the "/blog" and whatever "withoutCommas" is.  I also like all my paths to be lower case, I do not think it matters where we do this step but I figured here was pretty convenient. 

```js
  let final = `/blog/${withoutCommas}`.toLowerCase(); 
``` 

The remaining code will output the value of final in HTML and copy it to our clipboard, where we can then paste it into the appropriate Netlify field. 

```js
  let textToCopy = document.querySelector("#input");
  textToCopy.select();
  document.execCommand("copy"); 
  document.querySelector("#final").innerText = final; 
```

There are possibly better ways to do this, and I hope to share my improvements soon [one potential feature might be to strip out other characters], but this code will get the job done for now. NetlifyCMS is open source, so if I really wanted to, I could fork or clone NetlifyCMS and implement this code directly into the CMS. And this code/app may be useful for other CMSs and static site generators and so on, not just NetlifyCMS. Full code: https://codepen.io/anon/pen/KEqxXo?editors=1011 - thanks for reading. 
