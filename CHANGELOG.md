Version 3.1.8
* Fix calling task.
* Update README.md.

Version 3.1.7
* Fix not calling plugins.sass and plugins.imagemin.

Version 3.1.6
* Install gulp-sass and gulp-imagemin separately because these packages require --unsafe-perm option.
* Also to filter the it if you need to use sudo for linux or not for windows like the example below:
    - For linux `sudo npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`
    - For Windows `npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`

Version 3.1.5
* Forgot to remove gulp-sass gulp-imagemin inside of package.json.

Version 3.1.4
* Fix bug when installing package.

Version 3.1.3
* Add jpegtran-bin as dependency.
* Fix issue about installing package gulp-sass.

Version 3.1.2
* Move gulp-sass into devDependency to install it with option --unsave-perm because that package have issue.

Version 3.1.1
* Trying to fix bug when registering in npm.

Version 3.1.0
* Rename library from web-tools to web-dev-tools because web-tools is already exist in npm registry.

Version 3.0.0
* Publish this library to npm.
* Create bin command web-tools.
* Change main file from gulpfile.js to index.js.

Version 2.2.0
* Allow to change debug mode.

Version 2.1.0
* Add feature webpack.

Version 2.0.1
* Fix build:dist command.

Version 2.0.0
* Rename package from gulp-web-dev to web-tools.
* New file structures thats why the version move to 2.0.0.
* Clean and readable commands.
* Add License