# JavaScript, React & WordPress Workshop for Beginners

This workshop is from the [2019 JavaScript for WordPress Conference](https://javascriptforwp.com/conference) and includes a day long worth of exercises and projects to help you get up and running with JavaScript, React and how to use them in WordPress.

## Part 1 - Setup

In this section we will get our development environments up and running with the following:

1. Make sure you have Node & NPM installed
2. Get a code editor with a command line interface ([Try VSCode for Free](https://code.visualstudio.com/))
3. Setup a local install of WordPress ([Try the free version of Desktop Server](https://serverpress.com/))
4. Download the project files
5. Open the project files in your code editor

## Part 2 - JavaScript

In this section we will begin learning some JavaScript in order to build a custom lightbox from scratch.


## Part 3 - React

In this section we take what we learned about JavaScript and HTML and apply it to use React to build the same thing we built using JavaScript with the React library.

## Part 4 - WordPress

In the final section of the workshop we will learn how to add our JavaScript and React code into WordPress and convert our React lightbox to display previews of posts.

### Step 01 - Loading React

> wordpress/twentynineteen-child-step-01-loading-react

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

### Step 02 - Server Side Rendering Content

> wordpress/twentynineteen-child-step-02-server-side-render

0. Create 3 new posts with feature images
1. Create a `react-template.php` file
2. Add `Template Name: React Template` in a PHP comment at the top
3. Add a `get_header()` and `get_footer()`
4. Make a WP_Query call for 3 latest posts
5. Create markup for each post with the featured image, title and excerpt
6. Create a new page and assign it the React Template template
7. Comment out the `wp.element.render` in the `src/index.js` file
8. Run `npm build` and check the React Template page

### Step 03 - React Rendering

> wordpress/twentynineteen-child-step-03-react-render

1. Get the post containers
2. Setup an empty post object
3. For each post container, add post details to post object
4. Create a `Posts()` function that returns markup for posts
5. Call `wp.element.render` for `<Posts />` to load inside of `#react-template .posts`