# KASA
Here is the presentation site of project 7 of the Openclassroom web developer training.
This project was produced with React and React-router. No other libraries were used.


# To start


## Installation and startup

1. Clone repository ```https://github.com/Krock13/kasa.git```
2. Install node packages ```$ npm install```
3. Start the server ```npm start```

# Project display

## React

These React elements were used for quality code :

 - Slicing into modular and reusable components,
 - One component per file,
 - Logical structure of the different files,
 - Using 'props' between components,
 - Using 'state' in components when necessary,
 - Event management,
 - Iteration over lists using 'map',
 - Use of functional components rather than class components.

## React Router

 - Routes parameters are managed by React Router in the URL to retrieve information for each slot.
 - There is one page per route.
 - The 404 page is returned for each non-existent route, or if a value present in the URL is not part of the data entered.
 - The logic of the router is united in a single file.

## General

 - The code does not produce any error or warning in the console.

## Design

 - For scrolling photos in the gallery :
	 - If the user is at the first image and clicks on "Previous image", the gallery displays the last image.
	 - Conversely, when the displayed image is the last in the gallery, if the user clicks on "Next image", the gallery displays the first image.
	 - If there is only one image, the "Next" and "Previous" buttons do not appear..
 - The gallery always remains the same height, that indicated on the Figma model. Images are therefore cropped and centered within the image frame.
 - Collapse: By default, Collapses are closed on page initialization.
 - If the Collapse is open, the user's click closes it.
	 - Conversely, if the Collapse is closed, a click opens it.

