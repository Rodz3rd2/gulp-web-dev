# Change Logs

web-dev-tools v3.5.0
* Update the README.md.
* Update the wrong git url at package.json file.
* Update the description of this package.

web-dev-tools v3.4.2
* Remove sudo in command.

web-dev-tools v3.4.1
* Include gulp-sass and gulp-imagemin inside of this project.
* Just run npm install without sudo to avoid error.

web-dev-tools v3.4.0
* Use 'wdt' as bin command instead of whole name.

web-dev-tools v3.3.0
* Add option flatten on command build:images and build:fonts.

web-dev-tools v3.2.0
* Show result of deleting files.

web-dev-tools v3.1.8
* Fix calling task.
* Update README.md.

web-dev-tools v3.1.7
* Fix not calling plugins.sass and plugins.imagemin.

web-dev-tools v3.1.6
* Install gulp-sass and gulp-imagemin separately because these packages require --unsafe-perm option.
* Also to filter the it if you need to use sudo for linux or not for windows like the example below:
    - For linux `sudo npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`
    - For Windows `npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`

web-dev-tools v3.1.5
* Forgot to remove gulp-sass gulp-imagemin inside of package.json.

web-dev-tools v3.1.4
* Fix bug when installing package.

web-dev-tools v3.1.3
* Add jpegtran-bin as dependency.
* Fix issue about installing package gulp-sass.

web-dev-tools v3.1.2
* Move gulp-sass into devDependency to install it with option --unsave-perm because that package have issue.

web-dev-tools v3.1.1
* Trying to fix bug when registering in npm.

web-dev-tools v3.1.0
* Rename library from web-tools to web-dev-tools because web-tools is already exist in npm registry.

web-dev-tools v3.0.0
* Publish this library to npm.
* Create bin command web-tools.
* Change main file from gulpfile.js to index.js.

web-dev-tools v2.2.0
* Allow to change debug mode.

web-dev-tools v2.1.0
* Add feature webpack.

web-dev-tools v2.0.1
* Fix build:dist command.

web-dev-tools v2.0.0
* Rename package from gulp-web-dev to web-tools.
* New file structures thats why the version move to 2.0.0.
* Clean and readable commands.
* Add License