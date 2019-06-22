---
path: /blog/wonderful-wirify
date: '2019-06-15'
title: Wonderful Wirify
---
Wirify is an awesome browser tool that allows you turn a webpage into a wireframe. A wireframe is a visual outline of what a website would look like, for example there is little to no colour, and content is represented by boxes, wireframing is a technique designers use to get an idea onto paper, typically comes before a mockup as well as a prototype, and therefore wireframes are static. Wirify is surprisingly simple to use however it took me a couple of attempts to get it set up. Wirify is useful for reverse engineering layouts. 

 I believe Wirifiy works across many browsers but I use it within Chrome (for ease). Open up Chrome (duh), and navigate to settings (by clicking the 3 vertical dots in the top right corner). Scroll down and ensure “show bookmarks bar” is toggled (blue means “enabled”). 

Next copy this the following text [javascript code] (from https://wirify.com ): 
```
javascript:(function(){wf_bookmarklet={ver:'1.5',ka:86400000,to:7000};if(typeof%20wfInit=='undefined'){var%20s=document.body.appendChild(document.createElement('script')).src=(document.location.protocol=='https:'?'https:':'http:')+'//www.wirify.com/client/wirify.min.js?'+parseInt(new%20Date().getTime()/wf_bookmarklet.ka);window.setTimeout(function(){if(typeof%20wfInit=='undefined'){alert('Wirify%20is%20still%20processing%20or%20temporarily%20unavailable,%20please%20try%20again%20in%20a%20moment\n\nVisit%20%20twitter.com/wirify%20%20and%20%20www.wirify.com/blog%20%20for%20latest%20announcements');}},wf_bookmarklet.to);}else{wfInit();}})(); 
```

Now right click the bookmarks bar (which the “apps” icon is sits on) and paste the recently copied text into the bookmarks bar. 

To make sure things are working, open up just about any website and click "javascript(function(...)" within your toolbar (which is the start of the text you just pasted that will initiate the Wirify code). If all goes well, the website you are viewing will be turned into a wireframe within a few seconds. 

Now, while it does look cool to have some code in your browser, you might forget what that code does, so lets fix that. Inside Chrome, Click the 3 vertical dots (again) and hover over “Show bookmarks” > “Bookmarks manager” . Where the text that you pasted into the bookmarks bar is, are 3 vertical dots to the right, click these. Do not touch the URL section, but in the “Name” field, replace the text with any text you want, such as “Wirify”. Then click save. Double check Wirfiy still works and have fun ripping of other people’s designs, I mean, exploring the wonderful world of web design.  

# There’s More (But you need to pay) 
Wirify offers so much more, which is why you should check out https://wirify.com , thanks for reading.  

