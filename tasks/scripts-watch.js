var del  = require("del"),
    path = require('path');

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        var js_watcher = gulp.watch(config.scripts.src, [commands.scripts]);

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