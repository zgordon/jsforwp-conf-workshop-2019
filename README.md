# JavaScript, React & WordPress Workshop for Beginners

[![Workshop Banner with badges for topics](https://javascriptforwp.com/wp-content/uploads/2019/03/JS-for-WP-Conf-2019.png)](https://javascriptforwp.com/conference)


This workshop is from the [2019 JavaScript for WordPress Conference](https://javascriptforwp.com/conference) and includes a day long worth of exercises and projects to help you get up and running with JavaScript, React and how to use them in WordPress.

## Part 1 - Setup

In this section we will get our development environments up and running with the following:

1. Make sure you have Node & NPM installed
2. Get a code editor with a command line interface ([Try VSCode for Free](https://code.visualstudio.com/))
3. [Download the project files](https://github.com/zgordon/jsforwp-conf-workshop-2019/archive/master.zip)
4. Open the project files in your code editor
5. Setup a local install of WordPress ([Try Desktop Server for Free](https://serverpress.com/))
6. Add three posts with featured images 
7. Copy the four themes in the `wordpress` directory into your local `wp-content/themes` folder 

## Part 2 - JavaScript

In this section we will begin learning some JavaScript in order to build a custom lightbox from scratch.

#### Step 00 - Practice

`js/step-00-practice.html`

In this exercise we practice writing some basic JavaScript and getting information from the user.

#### Step 01 - Button Click

`js/step-01-button-click.html`

In this exercise we learn how to take an action when the user clicks on a button.

#### Step 02 - Adding Markup with JavaScript

`js/step-02-adding-markup.html`

Here we create a button on the fly with JavaScript and add it to the page.

#### Step 03 - Updating the Page with JavaScript

`js/step-03-updating-the-page.html`

Now we look at how to get user input and use it to modify existing content on the page.

#### Step 04 - Making a Lightbox Overlay

`js/step-04-lightbox-overlay.html`

In this step we start from scratch building a lightbox overlay and displaying it when an image is clicked.

#### Step 05 - Adding an Image to the Lightbox

`js/step-05-lightbox-image.html`

Here we take the overlay we designed and dynamically add the image that was clicked on to it, along with the alt text.

#### Step 06 - Closing the Lightbox

`js/step-06-lightbox-close.html`

In our final steps we learn some tricks for closing a lightbox based on where the user clicks or what keys they press.

## Part 3 - React

In this section we take what we learned about JavaScript and HTML and apply it to use React to build the same thing we built using JavaScript with the React library.

#### Step 00 - Practice

`react/step-00-practice`

In our first step we learn how to use `npm install` and `npm start` to get a React app built with Create React App up and running.

#### Step 01 - Button Click with React

`react/step-01-button-click`

In this step we learn how to do a simple onClick event in React using a button.

#### Step 02 - Using State

`react/step-02-using-state`

Here we introduce the important topic of state in React and how we can use it to keep track of data that changes in our code.

#### Step 03 - Lightbox Overlay

`react/step-03-lightbox-overlay`

Now we look at how to use state to create a lightbox overlay that only appears when the user clicks on an image.

#### Step 04 - Adding the Image to the Lightbox

`react/step-04-lightbox-image`

In this step we look at how to use state in React along with binding to get the image clicked on and display it in the lightbox.

#### Step 05 - Closing the Lightbox

`react/step-05-lightbox-close`

Now we complete our lightbox and the user to close it by clicking outside the image or pressing the Escape key.

#### Step 06 - Starting with Posts in State

`react/step-06-lightbox-posts-in-state`

In a bonus step to our lightbox, we look at how we can start with our images in state rather than hardcoded on the page.

## Part 4 - WordPress

In the final section of the workshop we will learn how to add our JavaScript and React code into WordPress and convert our React lightbox to display previews of posts.

#### Step 01 - Loading React

`wordpress/twentynineteen-child-step-01-loading-react`

1. run `npm init` in command line
2. Add `build` and `start` scripts to `package.json`
3. Create a `src/index.js` file for our React
4. Create a `Hello()` function 
5. Call `wp.element.render()` to display `<Hello />` in `#main .entry-content`
6. Run `npm start` and see `build/index.js` created and updated
7. Enqueue `build/index.js` in the `functions.php`
8. Check frontend to see `<Hello />` take over page content
9. Stop the server in command line with `ctl + c`
10. Run `npm build` and test everything again on the frontend

#### Step 02 - Server Side Rendering Content

`wordpress/twentynineteen-child-step-02-server-side-render`

0. Create 3 new posts with feature images
1. Create a `react-template.php` file
2. Add `Template Name: React Template` in a PHP comment at the top
3. Add a `get_header()` and `get_footer()`
4. Make a WP_Query call for 3 latest posts
5. Create markup for each post with the featured image, title and excerpt
6. Create a new page and assign it the React Template template
7. Comment out the `wp.element.render` in the `src/index.js` file
8. Run `npm build` and check the React Template page

#### Step 03 - React Rendering

`wordpress/twentynineteen-child-step-03-react-render`

1. Get the post containers
2. Setup an empty post object
3. For each post container, add post details to post object
4. Create a `Posts()` function that returns markup for posts
5. Call `wp.element.render` for `<Posts />` to load inside of `#react-template .posts`
6. This should replace the server side rendered posts with a React app with posts

#### Step 04 - Add Lightbox for Posts

`wordpress/twentynineteen-child-step-04-react-lightbox`

1. Get the post containers
2. Setup an empty post object
3. For each post container, add post details to post object
4. Create a `Posts()` function that returns markup for posts
5. Call `wp.element.render` for `<Posts />` to load inside of `#react-template .posts`
6. This should replace the server side rendered posts with a React app with posts

## Further Learning

To learn more about JavaScript, React and how to use it with WordPress, I suggest the following resources:

1. [JavaScript Language Basics Course](https://javascriptforwp.com/product/javascript-basics/)
2. [JavaScript Explained Book](https://javascriptexplained.com/)
3. [React Explained Book & Course](https://javascriptforwp.com/product/react-bundle/)
4. [Enqueuing JavaScript in WordPress Themes and Plugins](https://javascriptforwp.com/product/enqueuing-javascript-in-wordpress/)
5. [Gutenberg Block Development](https://javascriptforwp.com/product/gutenberg-block-development-course/)