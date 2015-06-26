# Template for Wordpress workflow with grunt, Git and Sass, Compass and Susy responsivce framework

![Template for Wordpress workflow with grunt, Git and Sass, Compass and Susy responsivce framewor](img.jpg)

This is my template for developing  Wordpress theme with Sass and runing Grunt task runner for compiling scss into css. Grunt compile your Sass into css, and use autoprefixer to add browser prefixes to your css. Then compress your Sass file for lower file size and faster load time. We use underscore starter theme for building custom wordpress themes. Also we use wamp or mamp server for developing wordpress theme locally.

##Instructions

Make sure you have these installed

1. [Node.js](hwww.nodejs.org).
2. [git](www.git-scm.com).
3. [grunt](www.gruntjs.com). Install grunt.js via the Mac terminal or Gitbash on a PC > `npm install -g grunt-cli`
3. [Sass](http://sass-lang.com/) Install Sass via the Mac terminal or console on a PC > `gem install sass`

Clone this repository into your local machine using the terminal (mac) or Gitbash (PC)
`git clone  https://github.com/drejcreative/TemplateGruntSassForWordpressUnderscores.git`

CD to the folder with workflows and then
Run > `npm-install` to install the project dependencies

Go to underscores theme [underscores.me](http://underscores.me/). Check advanced options and then check `_sassify!` radiobutton, add your theme name and click download.

Then add your custom underscores theme to wordpress, install and activate it.

When you do that, copy all files from this repository which you clone into your machine to your wordpress custom underscores theme directory on your local server.
Delete or change default theme style.css to something like backupStyle.css

Then CD to that folder with console and then run Grunt command > `grunt`

And thats it. Grunt will create `compiled` folder in which you have compiled css from your scss files. Autoprefixer will then add all prefix codes to css and compile it to root directory and create two new files: `style.css` and `style-NONcompresed.css`. Also Grunt will watch for all changes to your scss files and auto compile whenever you make change to it.
