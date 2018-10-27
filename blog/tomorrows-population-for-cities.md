---
path: "/blog/tomorrows-population-for-cities"
title: "Tomorrow's Population For Cities"
date: "04-08-2018"
---

In this tutorial, we will learn how to make a [get] request to the "WordPopulation" APIl http://api.population.io/#!/population/determineTotalPopulationTodayAndTomorrow and display it using ChartJS/ 

We will use Javascript, and HTML, and will need the ChartJS library which I will include via CDN. We also need two canvases as each of our charts will be displayed on their own canvas. 

{% codeblock %} 
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    h1 span { 
        color: green; 
    } 
    </style> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

</head>
<body>
           <h1>Today and Tomorrow's <span>Population</span>for Countries</h1> 

        <div class="charts"> 
          <canvas id="tomorrows-pop">
            <!-- chart will be displayed here using JS --> 
          </canvas> 
          <canvas id="todays-pop">
            <!-- chart will be displayed here using JS --> 
          </canvas> 
        </div> 
        <script> 
	// charts will be created here 
   	</script>
</body>
</html>
{% endcodeblock %} 

We first have to get our canvases. I will be using two global arrays for the data [though this is not reccomended[, so we initialize them too. 

{% codeblock %} 
            let todaysChart = document.querySelector("#todays-pop").getContext("2d");
            let tomorrowsCanvas = document.querySelector("#tomorrows-pop").getContext("2d"); 

            let todaysDataArray = [];             
            let tomorrowsDataArray = [];             

            // access the chart class to set a default-font-family [which can be overwritten]  
            Chart.defaults.global.defaultFontFamily = "Helvetica"; 
{% endcodeblock %} 

Our application will display a chart for today's population, and a chart for "tomorrow's" population [though I presume it will be a guestimate unless the API knows the future - or I've misunderstood something[... 

First, we will get our data and store ["push"] the appropriate values into our own array - I strongly recommend you use the API's documentation here to have a good understanding of what data I am making use of. We will use 3 requests as we need 3 city's, though the process is the same for each, notice the minor change when it comes to "tomorrow's" requests. And the city's I will be getting the data for are Brazil, Germany, and the UK, As we do not want the chart to be drawn without the data [as it may result in an inaccurate chart[, we will call a function which will draw our chart at the appropriate moment. 

{% codeblock %} 
    // Get data for Germany 
   fetch('http://api.population.io:80/1.0/population/Germany/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        tomorrowsDataArray.push(data.total_population[1].population); 
}).catch(error => console.log(error)); 

    // Get data for Brazil  
    fetch('http://api.population.io:80/1.0/population/Brazil/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        tomorrowsDataArray.push(data.total_population[1].population); 
}).catch(error => console.log(error)); 

    // Get data for UK 
    fetch('http://api.population.io:80/1.0/population/United%20Kingdom/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        tomorrowsDataArray.push(data.total_population[1].population);  
        drawTomorrowsChart(); 
}).catch(error => console.log(error)); 

{% endcodeblock %} 

At the end of that final request, we call our draw chart function, this is because we do not want to create the chart until we have all the data we need - and this is what I consider to be the simplest way of doing so. 

Next, we draw a [doughnut] chart, to create a chart, here is the function to do this. Notice that we simply create our own instance of the Chart object, the chart's first parameter is a reference to the canvas that we want the chart to be drawn onto, the second parameter is how we configure the chart, most notably, this is how we give the chart our data and a few other configuration options that can be best understood by visiting the ChartJS documentation and experimenting with the code. Notice the "type" property, I opted for a "doughnut" chart, but this could be a bar chart, simply by replacing "doughnut" with "bar", or "pie" etcetera. The most important properties are the two "data" properties as well as "datasets". 

{% codeblock %] 

function drawTomorrowsChart() { 
    let chart = new Chart(tomorrowsCanvas, { 
        type: 'doughnut', 
        data: { 
            labels: ['Germany', 'Brazil', 'UK'], 
            datasets: [{ 
            data: tomorrowsDataArray, 
            backgroundColor: ["green", "orange", "red"], 
            borderWidth: 2, 
            borderColor: "black" 
        }], 
        }, 
        options: { 
            title: { 
            display: true, 
            text: "Tomorrow's Population in Cities of My Choice"
            }
        }
    }); 
}
{% endcodeblock %} 

# Today's Data 
This code is essentially the same as the previous code, the main difference to be aware of is the index of the array the fetch requests. So, here is the code. 

{% codeblock %} 
    // Get data for Germany 
    fetch('http://api.population.io:80/1.0/population/Germany/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        todaysDataArray.push(data.total_population[0].population); 
}).catch(error => console.log(error)); 

    // Get data for Brazil  
    fetch('http://api.population.io:80/1.0/population/Brazil/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        todaysDataArray.push(data.total_population[0].population); 
}).catch(error => console.log(error)); 

    // Get data for UK 
    fetch('http://api.population.io:80/1.0/population/United%20Kingdom/today-and-tomorrow/')
     .then(function(response) {
     return response.json();
   })
     .then(function(data) { 
        todaysDataArray.push(data.total_population[0].population); 
        drawTodaysChart(); 
}).catch(error => console.log(error)); 

function drawTodaysChart() { 
    let chart = new Chart(todaysCavnas, { 
        type: 'doughnut', 
        data: { 
            labels: ['Germany', 'Brazil', 'UK'], 
            datasets: [{ 
            data: todaysDataArray, 
            backgroundColor: ["green", "orange", "red"], 
            borderWidth: 2, 
            borderColor: "black" 
        }], 
        }, 
        options: { 
            title: { 
            display: true, 
            text: "Today's Population in Cities of My Choice"
            }
        }
    }); 
}
{% endcodeblock %}  

# Improvements 
This code, in my opinion; could be made more readable and sensible - for example, everything is essentially done from top to bottom, this is simple, to begin with, but with more code becomes more hay for you to have to search in. ChartJS is a nice library because it provides a lot of complicated functionality out of the box. 
