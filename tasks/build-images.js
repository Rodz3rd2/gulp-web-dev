module.exports = function (gulp, plugins, config) {
    return function () {
        var options = (typeof config.build_images.options !== config.build_images.options) ? config.build_images.options : {};

        return gulp.src(config.build_images.src, options)
                .pipe(plugins.cache(plugins.imagemin({
                    interlaced: true
                })))
                .pipe(plugins.if(config.build_images.use_flatten, plugins.flatten()))
                .pipe(gulp.dest(config.build_images.dest))
                .on('end', function() {
                    if (typeof config.build_images.callback !== "undefined") {
                        config.build_images.callback();
                    }
                });
    };
};