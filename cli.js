#!/usr/bin/env node

const VERSION = "3.6.0";
const PROJECT_PATH = process.cwd();

var fse = require('fs-extra'),
    program = require("commander");

var app = require("./sponge"),
    commands = app.commands;

// init config command
program
.command('init')
.description("Create file sponge.config.js.")
.action(function () {
    try {
        if (fse.existsSync(PROJECT_PATH + "/sponge.config.js")) {
            throw "sponge.config.js is already created.";
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    try {
        fse.copySync(__dirname + "/sponge.config.js.example", PROJECT_PATH + "/sponge.config.js");
        console.log("Successfully created file sponge.config.js.");
    } catch (err) {
        console.error(err);
    }
});

// sass command
program
.version(VERSION)
.command(commands.sass)
.description("Compile sass file to css file.")
.action(function () {
    app.runGulpCommand(commands.sass);
});

// sass:watch command
program
.command(commands.sass_watch)
.description("Same of `sass` but it will watch it. It will compile while you changing the sass file.")
.action(function () {
    app.runGulpCommand(commands.sass_watch);
});

// scripts command
program
.command(commands.scripts)
.description("Compile the js file.")
.action(function () {
    app.runGulpCommand(commands.scripts);
});

// scripts:watch command
program
.command(commands.scripts_watch)
.description("Same of `scripts` but it will watch it.")
.action(function () {
    app.runGulpCommand(commands.scripts_watch);
});

// watch command
program
.command('watch')
.description("Run commands `sass:watch` and `scripts:watch`.")
.action(function () {
    app.runGulpCommand("watch");
});

// build:views command
program
.command(commands.build_views)
.description("Build views, minify the css and js and move it in dist folder.")
.action(function () {
    app.runGulpCommand(commands.build_views);
});

// build:images command
program
.command(commands.build_images)
.description("Optimize the file size of image and move the output file in dist/img folder.")
.action(function () {
    app.runGulpCommand(commands.build_images);
});

// build:fonts command
program
.command(commands.build_fonts)
.description("Flatten the fonts and move it in dist/fonts folder.")
.action(function () {
    app.runGulpCommand(commands.build_fonts);
});

// delete:dist command
program
.command(commands.unbuild_dist)
.description("Remove the dist folder.")
.action(function () {
    app.runGulpCommand(commands.unbuild_dist);
});

// build:dist command
program
.command(commands.build_dist)
.description("\n\tRun commands in this order: \n\t* `delete:dist` \n\t* `sass` \n\t* `scripts` \n\t* `build:views`, `build:images` and * `build:fonts` in parallel.")
.action(function () {
    app.runGulpCommand(commands.build_dist);
});

program.parse(process.argv);