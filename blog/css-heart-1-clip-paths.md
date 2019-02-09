---
path: /blog/css-heart-1-clip-paths
date: '2019-02-09'
title: 'CSS Heart #1 Clip-Paths'
---
In this tutorial we will learn learn how to draw a heart (or any shape) using CSS, there are multiple ways to do this, today we will use the clip path property, but another way might be to use CSS shapes - which may be what you are looking for. 

The clip path property will only display an area within a specific “path”, meaning that everything outside of the area specified using the path (or boundary), will be “cut” or “clipped”. I think it is easier to understand with a real example. 

We could manually give the clip path property values to draw out our heart, but instead, lets use this web tool called “Clippy” https://bennettfeely.com/clippy/ . Select “Custom Polygon”, then begin clicking until you have drawn a heart (hopefully yours is better than mine). 

The tool will then generate the values for our clip path, there will be two properties generated, the “webkit” one is for the Safari browser (as not all browsers are made equal). 

We can target both images (“img”) and regular HTML elements. 


Here is the full code. I add some optional example styling just to make things a bit more obvious, and the image is from https://www.pexels.com/search/heart/ .

```html
<html> 
  <style>  
  div, img { 
-webkit-clip-path: polygon(48% 22%, 62% 10%, 75% 11%, 79% 22%, 44% 60%, 15% 20%, 19% 8%, 31% 10%);
clip-path: polygon(48% 22%, 62% 10%, 75% 11%, 79% 22%, 44% 60%, 15% 20%, 19% 8%, 31% 10%);
} 

div, img { /* optional styling */
  height: 20em; 
  background-color: red; 
  margin-top: -1em; 
} 
</style> 
<head><title>Heart</title></head> 
  <body> 
  <img src="https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="heart" />
  <div><b>Heart</b></div> 
  </body> 
  </html< 
```

Thanks for reading. 
