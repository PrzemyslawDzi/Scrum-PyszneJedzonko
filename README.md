# Scrum
This is a repository was made in Scrum Methodology by 4 people. We used JavaScript HTML and Scss. U should use this app 
to create diet plans and recipies. We are still developing this aplication but u allready can use Main fetures! Have fun!

## How to start
To start development follow this instruction:

* `clone` this repo
* `npm install` all necessary npm packages
* Ve ve got a problem with firs compile scss to css so after `gulp` comand u should change anything in `main.scss` file
and wait for compile. Then change it back and everything should work.


## Gulp usage
Avaliable commends for you to type in console:

`gulp` or `gulp serve`  - this will run gulp in browserSync mode, that means gulp will start serwer on your `localhost` and refresh it for you everytime you change `scss`, `js` or `html` file. Using this command will do all the work for you :)

`gulp watch` - runs gulp in watch mode, that will compiles your `main.scss` into `css/main.css`

`gulp sass` - compiles sass into CSS & auto-inject into browsers


## Folder Structure
```
| - development/
	| - css/      
	| - fonts/
	| - images/  
	| - js/
	| - scss/
	| - app.html  
	| - index.html  
	| - recipes.html    
	| - schedules.html
| - distribution/
| - package.json
| - gulpfile.js
