var runSequence = require("run-sequence");

module.exports = function (gulp, plugins, config, commands) {
    return function () {
        runSequence(commands.unbuild,
            commands.sass,
            commands.scripts,
            [
                commands.build_views,
                commands.build_images,
                commands.build_fonts
            ],
            function() {
                if (typeof config.build_callback !== "undefined") {
                    config.build_callback();
                }
            }
        );
    };
};