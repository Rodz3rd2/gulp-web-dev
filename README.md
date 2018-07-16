# Sponge (v3.6.0)

## What is Sponge Rod?

Sponge Rod is a tool to minified your css and js files and optimize file size of images.

## Installation
 - Use `npm install --save-dev sponge` command in your terminal to install the dependency.
 - Also `gulp-cli` must be installed in your computer. To do that, use `npm install -g gulp-cli`.

## Commands
 - `node node_modules/.bin/wdt [-h|--help]` - Show command list.
 - `node node_modules/.bin/wdt init` - Create file sponge.config.js.
 - `node node_modules/.bin/wdt sass` - Compile sass file to css file.
 - `node node_modules/.bin/wdt sass:watch` - Same of `node node_modules/.bin/wdt sass` but it will watch it. It will compile while you changing the sass file.
 - `node node_modules/.bin/wdt scripts` - Compile js file.
 - `node node_modules/.bin/wdt scripts:watch` - Same of `node node_modules/.bin/wdt scripts` but it will watch it.
 - `node node_modules/.bin/wdt build:views` - Build views, uglify css and js and move it in dist folder.
 - `node node_modules/.bin/wdt build:images` - Optimize the file size of image and move the output file in dist/img folder.
 - `node node_modules/.bin/wdt build:fonts` - Flatten the fonts and move it in dist/fonts folder.

 - `node node_modules/.bin/wdt watch` - Run commands `node node_modules/.bin/wdt sass:watch` and `node node_modules/.bin/wdt scripts:watch`.
 - `node node_modules/.bin/wdt delete:dist` - Remove dist folder.
 - `node node_modules/.bin/wdt build:dist` - Run commands `node node_modules/.bin/wdt delete:dist`, `node node_modules/.bin/wdt sass`, `node node_modules/.bin/wdt scripts`, `node node_modules/.bin/wdt build:views`, `node node_modules/.bin/wdt build:images` and `node node_modules/.bin/wdt build:fonts`.

## Suggestion

I suggest to install `npx` node package in your local machine to execute the command simple.

Instead of for example `node node_modules/.bin/wdt watch`, you can achieve that with this very simple command `npx wdt watch`. Pretty cool ha!

## Example

First you need to create file `sponge.config.js` to map the file path of your project. Use built in command `npx init`.

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

After of all boring stuff, run the command `npx build:dist`. It would be create dist folder.
Test it by opening the dist/app.html in any browser. That's it!.

## LICENSE
sponge is released under the MIT Licence.