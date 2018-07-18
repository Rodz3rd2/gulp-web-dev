var named = require("vinyl-named"),
    webpack = require("webpack-stream");

module.exports = function (gulp, plugins, config) {
    return function () {
        var options = (typeof config.scripts.options !== config.scripts.options) ? config.scripts.options : {};

        return gulp.src(config.scripts.src, options)
                .pipe(plugins.plumber({
                    errorHandler: function (err) {
                        console.log(err);
                        this.emit("end");
                    }
                }))
                .pipe(named())
                .pipe(webpack())
                .pipe(gulp.dest(config.scripts.dest))
                .on('end', function() {
                    if (typeof config.scripts.callback !== "undefined") {
                        config.scripts.callback();
                    }
                });
    };
};