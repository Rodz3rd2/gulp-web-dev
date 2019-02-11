var compiler = require("webpack"),
    webpack_stream = require("webpack-stream"),
    _ = require("underscore"),
    notifier = require("node-notifier");

module.exports = function (gulp, plugins, config) {
    return function () {
        var base = "";
        var options = {};
        if (typeof config.scripts.options !== "undefined") {
            options = config.scripts.options;

            if (typeof options.base !== "undefined") {
                base = options.base;
            }
        }

        var notify = (typeof config.scripts.notify !== "undefined") ? config.scripts.notify : true;

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
                            return "./" + (_.isEmpty(base) ? "" : base.replace("/\/$/", "") + "/") + entry;
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

                    if (notify) {
                        notifier.notify({
                            title: "Sponge Rod",
                            message: "Compile js files completed!"
                        });
                    }
                });
    };
};
