# react-phase-2-project
Phase 2 React project - Indian recipes app

This is a react app that I created to demonstrate the usage of React terms and
concepts, such as - useState, useEffect, useParams hooks and react Browser
router that helps to navigate between different React components.

The app is pretty basic right now, where it displays a list of 8 recipes -
stored locally in the JSON DB - in the form of pictures of each dish. The user
can click on these images, which then routes (without a page refresh) and
displays a few details about what the dish is.
A form page is also provided, that can be navigated to, using the "Add a new
Recipe" link. The user can fill out the details of a new recipe that they'd
like to add including it's name, URL to it's image, Short description and a
detailed description. This will be then pushed to the JSON DB.

Another link is provided to take the user back to the home page.

I have created a total of 4 components
 - App - the base component that consists of Navigation links to the home page
   and routes to other components.
 - RecipeList - Iterates over all the JSON entries in the JSON DB and displays
   an image for each one of those entries.
 - Recipe - The base Recipe component that styles the image of a Recipe.
 - RecipeDetails - Renders the detail key of a recipe.
 - RecipeInput - Renders a form element with 4 fields for the user to input
   data as it pertains to the recipe that they want to add.

There are 3 routes that route the user from the App component, rendered on the
home page to other places in this react app.

Also, we perform GET and POST requests to the JSON DB server. I would extend
this to UPDATE and DELETE requests at some point in the future.
