#!/usr/bin/env node

const VERSION = "3.2.0";
const PROJECT_PATH = process.cwd();

var fse = require('fs-extra'),
    program = require("commander");

var config, gulpfile;

// init config command
program
.command('init')
.description("Create file web-dev-tools.config.js.")
.action(function () {
    try {
        if (fse.existsSync(PROJECT_PATH + "/web-dev-tools.config.js")) {
            throw "web-dev-tools.config.js is already created.";
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    try {
        fse.copySync(__dirname + "/web-dev-tools.config.js.example", PROJECT_PATH + "/web-dev-tools.config.js");
        console.log("Successfully created file web-dev-tools.config.js.");
    } catch (err) {
        console.error(err);
    }
});

if (!includeConfigIfExist()) {
    program.parse(process.argv);
} else {
    // sass command
    program
    .version(VERSION)
    .command(config.sass.command)
    .description("Compile sass file to css file.")
    .action(function () {
        gulpfile.run(config.sass.command);
    });

    // sass:watch command
    program
    .command(config.sass.watch_command)
    .description("Same of `sass` but it will watch it. It will compile while you changing the sass file.")
    .action(function () {
        gulpfile.run(config.sass.watch_command);
    });

    // scripts command
    program
    .command('scripts')
    .description("Compile js file.")
    .action(function () {
        gulpfile.run(config.scripts.command);
    });

    // scripts:watch command
    program
    .command('scripts:watch')
    .description("Same of `scripts` but it will watch it.")
    .action(function () {
        gulpfile.run(config.scripts.watch_command);
    });

    // watch command
    program
    .command('watch')
    .description("Run commands `sass:watch` and `scripts:watch`.")
    .action(function () {
        gulpfile.run("watch");
    });

    // build:views command
    program
    .command(config.build.views.command)
    .description("Build views, uglify css and js and move it in dist folder.")
    .action(function () {
        gulpfile.run(config.build.views.command);
    });

    // build:images command
    program
    .command(config.build.images.command)
    .description("Optimize the file size of image and move the output file in dist/img folder.")
    .action(function () {
        gulpfile.run(config.build.images.command);
    });

    // build:fonts command
    program
    .command(config.build.fonts.command)
    .description("Flatten the fonts and move it in dist/fonts folder.")
    .action(function () {
        gulpfile.run(config.build.fonts.command);
    });

    // delete:dist command
    program
    .command('delete:dist')
    .description("Remove folder dist folder.")
    .action(function () {
        gulpfile.run("delete:dist");
    });

    // build:dist command
    program
    .command('build:dist')
    .description("Run commands `delete:dist`, `sass`, `scripts`, `build:views`, `build:images` and `build:fonts`.")
    .action(function () {
        gulpfile.run("build:dist");
    });

    program.parse(process.argv);
}

function includeConfigIfExist()
{
    try {
        config = require(PROJECT_PATH + "/web-dev-tools.config");
        gulpfile = require("./gulpfile");
        return true;
    } catch (err) {
        return false;
    }
}