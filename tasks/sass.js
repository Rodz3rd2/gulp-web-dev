var sass = require("gulp-sass");

module.exports = function (gulp, plugins, config) {
    return function() {
        var sources = [];
        for (var i in config.sass.sources) {
            sources[i] = config.sass.dir + "/" + config.sass.sources[i];
        }

        return gulp.src(sources, {base: config.sass.dir})
                .pipe(plugins.plumber({
                    errorHandler: function (err) {
                        console.log(err);
                        this.emit("end");
                    }
                }))
                .pipe(sass())
                .pipe(plugins.autoprefixer())
                .pipe(plugins.csscomb())
                .pipe(plugins.mmq({
                    log: true
                }))
                .pipe(gulp.dest(config.sass.dest))
                .on('end', function() {
                    if (typeof config.sass.callback !== "undefined") {
                        config.sass.callback();
                    }
                });
            };
};