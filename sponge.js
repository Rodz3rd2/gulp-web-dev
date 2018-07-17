var gulp = require("gulp"),
    config = require(process.cwd() + "/sponge.config"),
    plugins = require("gulp-load-plugins")({
        DEBUG: config.debug,
        rename: {
            'gulp-merge-media-queries': "mmq"
        }
    });

var commands = {
    sass: typeof config.sass.command !== "undefined" ? config.sass.command : "sass",
    sass_watch: typeof config.sass.watch_command !== "undefined" ? config.sass.watch_command : "sass:watch",
    scripts: typeof config.scripts.command !== "undefined" ? config.scripts.command : "scripts",
    scripts_watch: typeof config.scripts.watch_command !== "undefined" ? config.scripts.watch_command : "scripts:watch",

    build_views: typeof config.build.views.command !== "undefined" ? config.build.views.command : "build:views",
    build_images: typeof config.build.images.command !== "undefined" ? config.build.images.command : "build:images",
    build_fonts: typeof config.build.fonts.command !== "undefined" ? config.build.fonts.command : "build:fonts",
    build_dist: typeof config.build.command !== "undefined" ? config.build.command : "build:dist",
    unbuild_dist: typeof config.unbuild.command !== "undefined" ? config.unbuild.command : "unbuild:dist"
};

function getTask(task)
{
    return require(__dirname + "/tasks/" + task)(gulp, plugins, config, commands);
}


gulp.task(commands.sass, getTask("sass"));
gulp.task(commands.scripts, getTask("scripts"));
gulp.task(commands.sass_watch, [commands.sass], getTask('sass-watch'));
gulp.task(commands.scripts_watch, [commands.scripts], getTask('scripts-watch'));
gulp.task("watch", [commands.sass_watch, commands.scripts_watch], function () {});

gulp.task(commands.build_views, getTask("build-views"));
gulp.task(commands.build_images, getTask("build-images"));
gulp.task(commands.build_fonts, getTask("build-fonts"));
gulp.task(commands.build_dist, getTask("build-dist"));
gulp.task(commands.unbuild_dist, getTask("unbuild-dist"));

module.exports = {
    commands: commands,

    runGulpCommand: function(command) {
        gulp.start(command);
    }
};