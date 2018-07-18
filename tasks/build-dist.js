var runSequence = require("run-sequence");

module.exports = function (gulp, plugins, config, commands) {
    return function () {
        runSequence(commands.unbuild_dist,
            commands.sass,
            commands.scripts,
            [
                commands.build_views,
                commands.build_images,
                commands.build_fonts
            ],
            function() {
                if (typeof config.build.callback !== "undefined") {
                    config.build.callback();
                }
            }
        );
    };
};