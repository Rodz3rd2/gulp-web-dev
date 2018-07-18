module.exports = function (gulp, plugins, config) {
    return function () {
        var options = (typeof config.build_fonts.options !== config.build_fonts.options) ? config.build_fonts.options : {};

        return gulp.src(config.build_fonts.src, options)
                .pipe(plugins.if(config.build_fonts.use_flatten, plugins.flatten()))
                .pipe(gulp.dest(config.build_fonts.dest))
                .on('end', function() {
                    if (typeof config.build_fonts.callback !== "undefined") {
                        config.build_fonts.callback();
                    }
                });
    };
};