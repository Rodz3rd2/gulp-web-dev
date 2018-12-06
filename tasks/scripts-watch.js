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
                var relative_dir = path.resolve(event.path, path.relative(event.path, config.scripts.dest));
                var last_index_of_relative_path = event.path.lastIndexOf(config.scripts.options.base);
                var relative_file = event.path.substr(last_index_of_relative_path + config.scripts.options.base.length);

                var file = relative_dir + relative_file;

                del(file);
            }
        });
    };
};
