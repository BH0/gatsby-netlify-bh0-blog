---
path: /blog/html-css-js-match-pairs-memory-game
date: '2019-01-19'
title: HTML-CSS-JS Match Pairs Memory Game
---
In this tutorial, we will learn how to make a "match pairs" memory game using HTML, CSS, and JS. I assume basic (ES6) Javascript knowledge. 

Here is the template HTML we will be using. 
```js
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Match Pairs Memory Game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style> 
 
    </style> 
</head>
<body>
    <div class="cards">

    </div>

    <script> 
 
    </script>     
</body>
</html> 
``` 
Next we have some CSS, we use flex to have the cards (which will be images) positioned in a grid, and we have an animation from AnimateCSS that will make the card look like it was flipped/rotated. 

```css
       @keyframes flipInY {
            from {
                transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                animation-timing-function: ease-in;
                opacity: 0;
            }
            40% {
                transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
                animation-timing-function: ease-in;
            }
            60% {
                transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
                opacity: 1;
            }
            80% {
                transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            }
            to {
                transform: perspective(400px);
            }
        }

        .flip { 
            backface-visibility: visible !important;  
            animation-name: flipInY;
            animation-duration: 2s;
        } 
        img { 
            width: 80px; 
            height: 100px; 
            padding: 2em 2em 2em 2em; 
        } 
        .cards { 
            display: flex; 
            flex-wrap: wrap; 
            width: 40%; 
        }
 ``` 
In the following code, we declare a constant, this constant is an estimate of how long the CSS animation will take, just to make sure the user interface does not seem buggy (you are welcome to tune this more finally), Then we have a simple function that mimics the "$" HTML element selection function from JQuery, and another one that handles selecting a group of elements. 

```js
        const timeToFlip = 800; 
        const $ = el => document.querySelector(el);
        const $all = els => document.querySelectorAll(els); 
``` 

Next, we obtain images from Pexel (a website that provides free images), or you can use your own images. In this array of objects, we have two properties, the first property is the image's path (URL), and the second property will be used for determining if the selected images match or not. Lastly, we have a "hiddenImage" constant, this holds the image that the player will see before they have selected a card. 

```js
        const cards = [
            { 
                image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "a"
            }, 
            {
                image: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "b"
            }, 
            {
                image: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "b"
            }, 
            { 
                image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "c"
            },
            { 
                image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "a"
            }, 
            { 
                image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "c"
            },
            { 
                image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "c"
            },
            {
                image: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "b"
            }, 
            { 
                image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "c"
            }, 
            { 
                image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "a"
            }, 
            { 
                image: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "b"
            }, 
            { 
                image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                data: "a"
            } 
        ]; 

const hiddenImage = "https://images.pexels.com/photos/1816/sky-night-dark-black.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; 
``` 

Here we will use a forEach function to loop through each object in our array and render an image to the HTML document object model, the div with the class of cards to be more specific, making use of our dollar sign function similarly to as if we were using JQuery alongside string interpolation. The variable "cardToPair" will store the first card out of the potential pair that the user has selected. 

```js
        cards.forEach(card => { 
            $(".cards").innerHTML += `<img src="${hiddenImage}" data-card="${card.data}"></img>`;  
        }); 

        let cardToPair = null; 
``` 

We will make use of a showImage function, this will take the fired event (as this function will be invoked in an event handler) as a parameter, as well as the index of the corresponding image, Next, we give the image that was clicked the class "flip", we then use the "setTimeout" function to wait for our card's flip animation to finish, at which point we will reveal the card's corresponding image (using the received index parameter to select the correct item from our aforementioned  cards array). 

```js
        const showImage = (i, e) => { // "i": index, "e": event 
            e.target.classList.add("flip"); 
            setTimeout(() => { 
                e.target.src = cards[i].image; 
            }, timeToFlip) 
        }
``` 
Now we can select all of the cards (which are images) using our select-all function, we give each card a click event handler, next we check that if no card has been selected by the user, then we assign the most recently clicked card to the "cardToPair" variable, represented as the current event. We then invoke our showImage function to reveal the card's image. However, if the user has selected a card, then we want to invoke our compare function (that we are yet to define), but before invoking this function, we check to see that the currently clicked card had not already been revealed. 

```js
        $all("img").forEach((img, i) => 
            img.addEventListener("click", e => { 
                if (cardToPair == null) { 
                    cardToPair = e;  
                    showImage(i, e); 
                } else { 
                    if (e.target.src == hiddenImage) { 
                        compare(e); 
                    } 
                    showImage(i, e); 
                }
            })
        ); 
``` 
Our compare function is not an arrow function but since we are not using the "this" keyword it doesn't make much of a difference. In our compare function, we are able to assume that two cards have been selected (thanks to where we invoked this function), so we then compare the currently selected card, with the card that was selected before this, I hope you noticed that when we rendered each image, we gave it a data [data-card] attribute, this data attribute held the card's letter (granted it may make sense to use something else instead of a letter, I'll let you decide that), now we can check if both selected cards have the same letter, by using this data-card attribute. If so, we make sure the card's flip animation has time to finish, then we remove the card's event listener - meaning that clicking the card will not do anything, and alert to the user that they selected a matching pair. If not, then we simply hide the card again and allow the user to try again. 

```js
        function compare(e) { 
            if (e.target.dataset.card == cardToPair.target.dataset.card) { 
                alert("yay"); 
                setTimeout(() => e.target.removeEventListener("click"), timeToFlip); 
                cardToPair = null; 
            } else { 
                setTimeout(() => { 
                    e.target.src = cardToPair.target.src = hiddenImage; 
                    cardToPair.target.classList.remove("flip"); 
                    e.target.classList.remove("flip"); 
                    cardToPair = null; 
                }, timeToFlip * 2); 
            } 
        }
``` 

There is a bug in this code, which occurs when the user selects more than two card's too quickly, I encourage you to attempt fixing this yourself as fixing bugs is a great way to learn a codebase. Thanks for reading, feel free to personalize this application. Perhaps even sharing it using something like Git (Github or GitLab) pages with whomever you want to. 

