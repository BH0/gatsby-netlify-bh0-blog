---
path: /blog/integrating-google-analytics-into-itch-io-games
date: '2018-12-01'
title: Integrating Google Analytics into Itch.io Games
---
Ok, we have made our web browser game, we are so proud of the game, and are sharing the game with everyone we know. But, how do we know that people are actually playing our game? 



Well, one way would be to monitor the URL we are using to distribute our game, but this method may be a tad dodgy, so instead, we can use "Google Analytics", This web-tool is incredibly simple to integrate into our website, and we can use the tool to monitor users navigating to our game, and monitor buzzwords such as "bounce rates", that is, how long someone will be playing your game until they give up. For other platforms, you would have to copy and paste a script provided by Google's analytics platform into your source-code, but with Itch.io we do not even need to do this (though I intend on making tutorials that cover this anyway). 



\# Create A Google Analytics Account & Get Tracking ID 

This is easy, just navigate to https://analytics.google.com/analytics/web/

 and follow the onscreen instructions (you will need a Google account). After you log in to your Google account, click "sign up", make sure the "website" is tab is toggled, and fill out the form, for website name, I put the name of my game on Itch.io , then for the URL paste in the URL of your Itch.io game's webpage, like "username.itch.io/gamename", I believe "arts and entertainment" is an appropriate industry category. check/uncheck the options you are comfortable with and click "get tracking id". Agree \[or leave], copy the text under "Tracking ID", such as "UA-000000000-1". 



\# Give Your Tracking ID To Your Itch.io Page 

Now we need to "link" our game's Itch.io webpage with Google Analytics, go back to your game's page, click "Edit game", go to the "Analytics" tab, and under "Google Analytics" (near the bottom of the page), paste your Tracking ID into the appropriate field. Click "save". 



\# Confirm Things Are Working 

Click the "home" icon, to the left of the webpage on the Google Analytics page where you got the tracking ID from. If you (or someone else) has your game's webpage open, then there should at least be a "1" \[number one], under "Active users right now", this means people are viewing your game and you are able to access statistics and receive real-time updates, if this is not the case - then sorry but it seems you messed something up. 



\# What was the point? 

Itch.io offers statistics regarding the number of times our games have been viewed, so there wasn't really much point in doing this other than a chance to learn, having said that, Google Analytics offers more statistics so may be useful to you in the long run. Google Analytics has many statistics such as where your users have come from, the country most of your users are in, all sorts of statistics, I suggest that you click around the Google Analytics dashboard. Thanks for reading.  And of course, you can have multiple Google Analytics Accounts, multiple websites, and applications that are being monitored by Google Analytics.
