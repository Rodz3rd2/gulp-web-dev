# Web Tools (v2.0.0)
Tools for watching sass and js. Compress your css and js files. Optimize file size of images. Move all fonts at the one location.

## Installation
 - Install development dependency inside of package.json using command `npm install`.
 - Install `gulp-cli` globally if it is not already installed in your computer.

## Commands
 - `gulp sass` - Compile sass file to css file.
 - `gulp sass:watch` - Same of `gulp sass` but it will watch it. It will compile while you changing the sass file.
 - `gulp scripts` - Compile js file.
 - `gulp scripts:watch` - Same of `gulp scripts` but it will watch it.
 - `gulp build:views` - Build views, uglify css and js and move it in dist folder
 - `gulp build:images` - Optimize the file size of image and move the output file in dist/img folder
 - `gulp build:fonts` - Flatten the fonts and move it in dist/fonts folder.

 - `gulp watch` - Run commands `gulp sass:watch` and `gulp scripts:watch`.
 - `gulp delete:dist` - Remove folder dist folder.
 - `gulp build:dist` - Run commands `gulp delete:dist`, `gulp sass`, `gulp scripts`, `gulp build:views`, `gulp build:images` and `gulp build:fonts`.

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
console.log("I am app2.js");
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

After all of those setup, run command `gulp build:dist`. It would be create dist folder. That's it!

## LICENSE
Web Tools is released under the MIT Licence.