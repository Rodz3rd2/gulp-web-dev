# Web Tools Dev (v3.3.0)
Tools for watching sass and js. Compress your css and js files. Optimize file size of images. Move all fonts at the one location.

## Installation
 - Install development dependency inside of package.json using command `sudo npm install --save-dev web-dev-tools`.
 - Install `gulp-sass` and `gulp-imagemin` separately because these packages require `--unsafe-perm` option.
   Also to filter the it if you need to use sudo for linux or not for windows like the example below:
    - For linux `sudo npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`
    - For Windows `npm install --save-dev --unsafe-perm gulp-sass gulp-imagemin`
 - Install `gulp-cli` and `npx` globally if it is not already installed in your computer.

## Setup
 - First you need to create file `web-dev-tools.config.js` to setup the path. Use build in command `npx web-dev-tools init`.
 - Now check the available commands to know what can do of this library.
 - Follow the step in 'Example' section below to know how it works.

## Commands
 - `npx web-dev-tools [-h|--help]` - Show command list.
 - `npx web-dev-tools init` - Create file web-dev-tools.config.js.
 - `npx web-dev-tools sass` - Compile sass file to css file.
 - `npx web-dev-tools sass:watch` - Same of `npx web-dev-tools sass` but it will watch it. It will compile while you changing the sass file.
 - `npx web-dev-tools scripts` - Compile js file.
 - `npx web-dev-tools scripts:watch` - Same of `npx web-dev-tools scripts` but it will watch it.
 - `npx web-dev-tools build:views` - Build views, uglify css and js and move it in dist folder.
 - `npx web-dev-tools build:images` - Optimize the file size of image and move the output file in dist/img folder.
 - `npx web-dev-tools build:fonts` - Flatten the fonts and move it in dist/fonts folder.

 - `npx web-dev-tools watch` - Run commands `npx web-dev-tools sass:watch` and `npx web-dev-tools scripts:watch`.
 - `npx web-dev-tools delete:dist` - Remove dist folder.
 - `npx web-dev-tools build:dist` - Run commands `npx web-dev-tools delete:dist`, `npx web-dev-tools sass`, `npx web-dev-tools scripts`, `npx web-dev-tools build:views`, `npx web-dev-tools build:images` and `npx web-dev-tools build:fonts`.

## Example
Follow the folder structure of this project
```
app/
 |--src/
    |--img/
        |--a.jpg
    |--js/
        |--app.js
        |--app2.js
    |--sass
        |--app.scss
        |--app2.scss
 |--app.html
```

app.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <!-- build:css css/app.css -->
    <link rel="stylesheet" type="text/css" href="./css/app.css">
    <link rel="stylesheet" type="text/css" href="./css/app2.css">
    <!-- endbuild -->
</head>
<body>
    <p>Hello World</p>
    <img src="./../dist/img/a.jpg" width="200">

    <!-- build:js js/app.js -->
    <script type="text/javascript" src="./js/app.js"></script>
    <script type="text/javascript" src="./js/app2.js"></script>
    <!-- endbuild -->
</body>
</html>
```

app.js
```js
console.log("I am app.js");
```

app2.js
```js
import _ from 'lodash';

console.log(_.max([6,7,4,2]));
```

app.scss
```scss
body {
    background-color: blue;
}
```

app2.scss
```scss
p {
    color: green;
    font-size: 20px;
}
```

a.jpg
- Just add image in app/src/img folder and name it a.jpg

After all of those setup, run command `npx web-dev-tools build:dist`. It would be create dist folder.
Test it by opening the dist/app.html in browser. That's it!.

## LICENSE
Web Dev Tools is released under the MIT Licence.