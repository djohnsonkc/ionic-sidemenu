
Ionic 2 and Angular 2
=====================================
A simple SPA app using AngularJS, Node.js, Express.js, and Grunt to demonstrate optimization and a nice file uploader.

## This project was bootstrapped using the Ionic CLI

$ ionic start myAppName sidemenu


## Theme Changes Using SaSS


Overriding Ionic SaSS Variables

http://ionicframework.com/docs/theming/overriding-ionic-variables/

Changes to src/theme/variables.scss

	$my-brand-purple: #68409a;

	$my-brand-color: $my-brand-purple;

	$colors: (
	  /*primary:    #488aff,*/
	  primary:    $my-brand-color,
	  secondary:  #32db64,
	  danger:     #f53d3d,
	  light:      #f4f4f4,
	  dark:       #222
	);

	$text-color: $my-brand-color;
	$toolbar-background: $my-brand-color;



## Adding new views to the project
-------------------------

// create a new contact page
$ ionic g page contact

After adding new views, make sure and add a reference to the following project files in the src/app directory:

* app.component.ts
* app.module.ts
* main.ts

You'll see an "onboarding" view that I added. 




