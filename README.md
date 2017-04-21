# Development with Gulp

Building front-end web project fast.

## Setup
 - Just run npm install --only=dev in your cmd to install all require packages. Please see package.json file to see all require packages.
 - Change the basedir at the 'gulpfile.config.js', just change the value of basedir.

### Development Command
 - `gulp sass`
 	Compile the sass file into css file and automatic comb your code and merge all media queries.
 	Also have autoprefixer feature. For more info in autoprefixer, see https://www.npmjs.com/package/gulp-autoprefixer.

 - `gulp sass-watch`
 	Watch the sass command.

### Build Command
 - `gulp useref`
 	Bundle the css and js base on the code.

 - `gulp optimize-images`
 	Optimize images and store it into dist/img path.

 - `gulp flatten-fonts`
 	Collect all fonts and store it into dist/fonts path without depth

 - `gulp delete-dist`
 	Delete dist folder

 - `gulp build`
 	Run 'delete-dist', 'useref', 'optimize-images', 'flatten-fonts' tasks respectively.
