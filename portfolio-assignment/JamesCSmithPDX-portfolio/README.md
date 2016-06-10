# code-blog
Portfolio blog project

## This project has gone through a lot of refactoring.
It is a single page app portfolio site.
It currently lists projects in a blog-like format on click of the portfolio button
It shows about me information on click of the About Me button - funny how that works.
I used Bootstrap for the responsive grid capabilities + custom CSS
Used some web fonts, social icons and creative commons licensed image for the background

## The projects are objects stored in a JSON file
I use a get call to get the data and then add it to the DOM through a Handlebars template
I use a Ajax call to GET the data form the JSON file.

#Functional Programming and IIFE
Code includes use of functional programming, array methods and IIFE modules.

## Anagram
We were asked to use functional programming and the .reduce() method in the about me or footer
I created a silly anagram function to scramble on every click of About Me. The logic uses Fisher Yates
to randomize the anagram. A handlebars template is used to add the anagram to my about me section.    

#MVC
The JSON is the data model with a main.js file to manage the data
The projectView.js and anagram.js are View elements that manage displaying the data + CSS
The index.html is the controller.
