#!/usr/bin/env node

var fse = require('fs-extra'),
    program = require("commander");

var webtools_path = "./";

if (!fse.existsSync(webtools_path + "/web-tools.config.js")) {
    // init config command

    var is_file_created = false;
    program
    .command('init')
    .description("Create file web-tools.config.js.")
    .action(function () {
        try {
            fse.copySync(webtools_path + "/web-tools.config.js.example", webtools_path + "/web-tools.config.js");
            is_file_created = true;
        } catch (err) {
            console.error(err);
        }
    });
    program.parse(process.argv);

    console.log(is_file_created ? "Successfully created file web-tools.config.js." : "Error: web-tools.config.js file not found.\nTry `web-tools init` command.");
    return;
}

var gulpfile = require(webtools_path + "/gulpfile.js"),
    config = require(webtools_path + "/web-tools.config.js");

// sass command
program
.version(config.version)
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