---
path: skeletonscss-simple-webpage
date: '2018-10-27'
title: SkeletonCSS Simple Webpage
---
SkeletonCSS is a CSS framework - well, boilerplate. And one I recommend for those who do not like CSS frameworks all that much. 

# About SkeletonCSS 
SkeletonCSS is responsive (because what is the point in using a CSS framework if not for the responsiveness). Like Bulma (which is newer than SkeletonCSS), SkeletonCSS does not include JavaScript - but also does not have as much out-of-the-box styled elements than Bulma. 

SkeletonCSS is incredibly lightweight meaning the framework will not have a drastic impact on the load-time of your website. The 

The framework is incredibly minimal, meaning that only a small number of class names have to be remembered (which is barely a big deal given the documentation page is super helpful). This allows you to have a clean looking website overall without having the framework get in your way. Meaning you can do a lot of customization using CSS or a CSS preprocessor like SASS or LESS. 

Personally, I wish there were a bit more utilities but the ones included are helpful and easy to remember and recognize, as all they are is "u-utility-name". Such as "u-cf" for "utility-clearfix" [the clearfix utillity.] 

The grid is very intuitive. For example, you can do "one-third columns" or "three columns" inside a row. And there is indeed a container/wrapper class [which is called "container"]. 

# A Simple Webpage 
Here is a simple webpage I made within a short-time using SkeletonCSS (for the first time), with images sourced from Pixel. Thanks for reading.
```html
 
<!DOCTYPE html>
<!--[if lte IE 6]><html class="preIE7 preIE8 preIE9"><![endif]-->
<!--[if IE 7]><html class="preIE8 preIE9"><![endif]-->
<!--[if IE 8]><html class="preIE9"><![endif]-->
<!--[if gte IE 9]><!--><html><!--<![endif]-->
  <head>
    <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>title</title>
  <meta name="author" content="name">
  <meta name="description" content="description here">
  <meta name="keywords" content="keywords,here">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <style>
      body { 
          color: darkred; 
      }

      .center { 
          text-align: center;
      }

      .card { 
          color: darkred; 
      }

      /* overrides SkeletonCSS's default button's background-color */
      .button { 
          background-color: darkred; 
      }

      /* overrides SkeletonsCSS's default textarea's border color on focus */ 
      textarea:focus { 
          border-color: darkred; 
      }
    </style>
  </head>
  <body>
    <div class="container">
        <div class="center"><h1>CONTENT</h1></div>

        <div class="row">
          <div class="card four columns">
            <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
            <table class="u-full-width">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Year built</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Somewhere</td>
                    <td>$40,000</td>
                    <td>1997</td>
                  </tr>
                </tbody>
              </table>              
          </div>

          <div class="card four columns">
            <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
            <table class="u-full-width">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Year built</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Somewhere</td>
                    <td>$40,000</td>
                    <td>1997</td>
                  </tr>
                </tbody>
              </table>              
            </div>

            <div class="card four columns">
              <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
              <table class="u-full-width">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Year built</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Somewhere</td>
                      <td>$40,000</td>
                      <td>1997</td>
                    </tr>
                  </tbody>
                </table>              
            </div>
        </div>               

        <div class="row">
            <div class="card four columns">
              <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
              <table class="u-full-width">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Year built</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Somewhere</td>
                      <td>$40,000</td>
                      <td>1997</td>
                    </tr>
                  </tbody>
                </table>              
            </div>
  
            <div class="card four columns">
              <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
              <table class="u-full-width">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Year built</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Somewhere</td>
                      <td>$40,000</td>
                      <td>1997</td>
                    </tr>
                  </tbody>
                </table>              
              </div>
              <div class="card four columns">
                <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
                <table class="u-full-width">
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Year built</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Somewhere</td>
                        <td>$40,000</td>
                        <td>1997</td>
                      </tr>
                    </tbody>
                  </table>              
              </div>
          </div>               

          <div class="row">
              <div class="card four columns">
                <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
                <table class="u-full-width">
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Year built</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Somewhere</td>
                        <td>$40,000</td>
                        <td>1997</td>
                      </tr>
                    </tbody>
                  </table>              
              </div>
    
              <div class="card four columns">
                <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
                <table class="u-full-width">
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Year built</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Somewhere</td>
                        <td>$40,000</td>
                        <td>1997</td>
                      </tr>
                    </tbody>
                  </table>              
                </div>
                <div class="card four columns">
                  <img src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style="width:100%">
                  <table class="u-full-width">
                      <thead>
                        <tr>
                          <th>Location</th>
                          <th>Price</th>
                          <th>Year built</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Somewhere</td>
                          <td>$40,000</td>
                          <td>1997</td>
                        </tr>
                      </tbody>
                    </table>              
                </div>
            </div>                   

        </div>

        <div class="center">
            <img src="https://images.pexels.com/photos/64287/stirling-castle-scotland-stirling-castle-64287.jpeg?auto=compress&cs=tinysrgb&h=350" /> 
        </div>

        <ul><strong>SkeletonCSS Is</strong>
          <li>Responsive</li>
          <li>Minimal</li>
          <li>Lightweight</li>
          <li>Easy to remember</li>
        </ul>
      
        <form>
            <div class="row">
              <div class="six columns">
                <label for="exampleEmailInput">Your email</label>
                <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
              </div>
              <div class="six columns">
                <label for="exampleRecipientInput">Main reason for using SkeeltonCSS</label>
                <select class="u-full-width" id="exampleRecipientInput">
                  <option value="Option 1">Responsive</option>
                  <option value="Option 2">Lightweight</option>
                  <option value="Option 3">Minimal</option>
                  <option value="Option 3">Clean</option>
                  <option value="Option 3">Easy to remember</option>
                </select>
              </div>
            </div>
            <label for="exampleMessage">Message</label>
            <textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
            <label class="example-send-yourself-copy u-pull-right">
              <input type="checkbox">
              <span class="label-body">SkeletonCSS Rocks</span>
            </label>
            <input class="button-primary" type="submit" value="Submit">
          </form>
        </div> 
        <p class="u-full-width"><a class="button" href="#">Anchor tag as button</a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aut officiis? Ab amet vel, incidunt dicta optio hic vitae eos.<a class="button button-primary" href="#">Anchor tag as button</a></p>
        <a href="#" class="button u-pull-right">ANchor tag as button</a>
  </body>
</html>
```

