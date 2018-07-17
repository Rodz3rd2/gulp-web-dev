var del  = require("del"),
    path = require('path');

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        var sources = [];
        for (var i in config.sass.sources) {
            sources[i] = config.sass.dir + "/" + config.sass.sources[i];
        }

        var sass_watcher = gulp.watch(sources, [commands.sass]);

        sass_watcher.on('change', function (event)
        {
            if (event.type === "deleted")
            {
                var file = path.resolve(config.sass.dest, path.relative(path.resolve(config.sass.dir), event.path));
                var css_file = file.replace(".scss", ".css");

                del([css_file]).then(paths => {
                    console.log("Successfully deleted " + css_file);
                });
            }
        });
    }
};