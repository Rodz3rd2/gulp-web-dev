var del  = require("del"),
    path = require('path');

var globParent = require('glob-parent');

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        var sass_watcher = gulp.watch(config.sass.src, [commands.sass]);

        var src_base = globParent(config.sass.src);
        if (typeof(config.sass.options) !== "undefined") {
            if (typeof(config.sass.options.base) !== "undefined") {
                src_base = config.sass.options.base;
            }
        }

        sass_watcher.on('change', function (event)
        {
            if (event.type === "deleted")
            {
                var relative_dir = path.resolve(event.path, path.relative(event.path, config.sass.dest));
                var last_index_of_relative_path = event.path.lastIndexOf(src_base);
                var relative_file = event.path.substr(last_index_of_relative_path + src_base.length);

                var file = relative_dir + relative_file;
                var css_file = file.replace(".scss", ".css");

                del(css_file);
            }
        });
    };
};