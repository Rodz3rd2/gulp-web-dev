var gulp = require("gulp"),
    config = require(process.cwd() + "/web-dev-tools.config"),
    plugins = require("gulp-load-plugins")({
        DEBUG: config.debug,
        rename: {
            'gulp-merge-media-queries': "mmq"
        }
    });

function getTask(task) {
    return require(config.tasks_dir + "/" + task)(gulp, plugins, config);
}

gulp.task(config.sass.command, getTask("sass"));
gulp.task(config.scripts.command, getTask("scripts"));
gulp.task(config.sass.watch_command, [config.sass.command], getTask('sass-watch'));
gulp.task(config.scripts.watch_command, [config.scripts.command], getTask('scripts-watch'));
gulp.task("watch", [config.sass.watch_command, config.scripts.watch_command], function () {});

gulp.task(config.build.views.command, getTask("build-views"));
gulp.task(config.build.images.command, getTask("build-images"));
gulp.task(config.build.fonts.command, getTask("build-fonts"));
gulp.task("delete:dist", getTask("delete-dist"));
gulp.task("build:dist", getTask("build-dist"));

exports.run = function (command) {
    gulp.start(command);
};