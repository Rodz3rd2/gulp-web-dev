var del  = require("del"),
    path = require('path'),

    _ = require("underscore");

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        var js_watcher = gulp.watch(_.map(_.values(config.scripts.entries), function(entry) {
                            return "./" + entry;
                        }), [commands.scripts]);

        js_watcher.on('change', function (event)
        {
            if (event.type === "deleted")
            {
                var file = path.resolve(config.scripts.dest, path.relative(path.resolve(config.scripts.dir), event.path));

                del([file]).then(paths => {
                    console.log("Successfully deleted " + file);
                });
            }
        });
    };
};
