var runSequence = require("run-sequence"),
    notifier = require("node-notifier");

module.exports = function (gulp, plugins, config, commands) {
    return function () {
        var notify = typeof config.build_views.notify !== "undefined" ? config.build_views.notify : false;

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

                if (notify) {
                    notifier.notify({
                        title: "Sponge Rod",
                        message: "Build all files completed!"
                    });
                }
            }
        );
    };
};