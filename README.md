# Web Tools Dev (v3.1.3)
Tools for watching sass and js. Compress your css and js files. Optimize file size of images. Move all fonts at the one location.

## Installation
 - Install development dependency inside of package.json using command `npm install --unsafe-perm`. Option --unsafe-perm need of gulp-sass package. See <a href="https://github.com/dlmanning/gulp-sass/issues/652#issuecomment-362268260">https://github.com/dlmanning/gulp-sass/issues/652#issuecomment-362268260</a>
 - Install `gulp-cli` and `npx` globally if it is not already installed in your computer.

## Commands
 - `npx web-dev-tools help` - Show command list.
 - `npx web-dev-tools init` - Create file web-dev-tools.config.js.
 - `npx web-dev-tools sass` - Compile sass file to css file.
 - `npx web-dev-tools sass:watch` - Same of `npx web-dev-tools sass` but it will watch it. It will compile while you changing the sass file.
 - `npx web-dev-tools scripts` - Compile js file.
 - `npx web-dev-tools scripts:watch` - Same of `npx web-dev-tools scripts` but it will watch it.
 - `npx web-dev-tools build:views` - Build views, uglify css and js and move it in dist folder.
 - `npx web-dev-tools build:images` - Optimize the file size of image and move the output file in dist/img folder.
 - `npx web-dev-tools build:fonts` - Flatten the fonts and move it in dist/fonts folder.

 - `npx web-dev-tools watch` - Run commands `gulp sass:watch` and `gulp scripts:watch`.
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

After all of those setup, run command `gulp build:dist`. It would be create dist folder.
Test it by opening the dist/app.html in browser. That's it!.

## LICENSE
Web Dev Tools is released under the MIT Licence.