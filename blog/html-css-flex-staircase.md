---
path: /blog/html-css-flex-staircase
date: '2019-02-02'
title: HTML-CSS-Flex-Staircase
---
aIn this tutorial, we will learn how to make a staircase (or steps) using HTML and CSS. We will make use of flex. Flex is an awesome (and rather simple) way of making responsive layouts using CSS. 

Let's start out with our base HTML and CSS - later on, I use JavaScript to generate the HTML quickly, but this tutorial will work with your own HTML. I use some basic styling just so we can determine where each step is. 

```html
<style> 
.stair { 
  background-color: red; 
  border: 2px solid black; 
} 
</style> 
<div class="staircase">
 	<!-- your own html (or the JS generated HTML -->  
</div> 
```

I generate some HTML using JavaScript - but this tutorial assumes you have your own HTML ready to go [or you can just use my JS script]. But you do not need to understand the JS to learn Flex. Notice the "br" tag, this is just to create obvious space within each element, but you can use your own HTML such as paragraphs (but be aware that each element may not be equal in width and/or height). 

```js
["<br/>one", "<br/><br/>two", "<br/><br/><br/>three", "<br/><br/><br/><br//>four", "<br/><br/><br/><br/><br/>five"].forEach(stair => { 
  document.querySelector(".staircase").innerHTML += `<div class=stair>${stair}</div>`
}); 
```

We use a parent container element, that will determine the flexibility of each of it's nested [child] elements (the steps/stairs). My parent element is called "staircase". 

```css
.staircase { 
  display: flex; 
} 
``` 
We are pretty much almost done, but I want my nested elements to be a specific width, so the flex-basis property will come in useful, you can use whichever unit you like (or skip this part). 

```css
.stair { /* feel free to put this with the rest of the stair's styling */ 
  flex-basis: 4em; 
} 
``` 

Lastly, we just need to have the container's elements make each of its child elements to tell their height to mimic a staircase - in that the height of each stair will gradually rise. We do this using the "align-items" property. 

```css
.staircase { 
  display: flex; 
  align-items: flex-start;
} 
``` 

The above styling will keep the start (the top) of each element's height the same, and stretch the bottom, however, this is an upside-down staircase, so lets instead use the "flex-end" value to ensure that the bottom of part of the element remains consistent and that the top will gradually rise. 

```css
 .staircase { 
  display: flex; 
  align-items: flex-end;
} 
``` 
We can then use CSS (such as more properties related to flex) to change the order of the steps and so on, but I'll leave this up to you. Here is the full example. 

```html
<html>
	<head> 
		<style> 
			.stair { 
  background-color: red; 
  border: 2px solid black; 
} 
 
.staircase { 
  display: flex; 
  align-items: flex-end;
} 

.stair { 
  flex-basis: 4em; 
} 
		</style> 
	</head> 
	<body> 
		<div class="staircase">
	 	 
		</div> 		
		<script> 
		["<br/>one", "<br/><br/>two", "<br/><br/><br/>three", "<br/><br/><br/><br//>four", "<br/><br/><br/><br/><br/>five"].forEach(stair => { 
  document.querySelector(".staircase").innerHTML += `<div class=stair>${stair}</div>`
}); 
		</script> 
	</body> 
</html>
``` 

Thanks for reading, have fun flexing. 
