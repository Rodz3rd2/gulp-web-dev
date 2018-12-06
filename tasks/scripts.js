var compiler = require("webpack"),
    webpack_stream = require("webpack-stream"),
    path = require("path"),
    _ = require("underscore"),
    notifier = require("node-notifier");

module.exports = function (gulp, plugins, config) {
    return function () {
        var options = (typeof config.scripts.options !== config.scripts.options) ? config.scripts.options : {};

        return gulp.src("dummy-entry.js", _.extend({allowEmpty: true}, options))
                .pipe(plugins.plumber({
                    errorHandler: function (err) {
                        console.log(err);
                        this.emit("end");
                    }
                }))
                .pipe(webpack_stream({
                    entry: _.object(
                        _.keys(config.scripts.entries),
                        _.map(_.values(config.scripts.entries), function(entry) {
                            return "./" + entry;
                        })
                    ),

                    output: {
                        filename: "[name].js"
                    }
                }, compiler))
                .pipe(gulp.dest(config.scripts.dest))
                .on('end', function() {
                    if (typeof config.scripts.callback !== "undefined") {
                        config.scripts.callback();
                    }

                    notifier.notify({
                        title: "Sponge Rod",
                        message: "Compile js files completed!"
                    });
                });
    };
};
