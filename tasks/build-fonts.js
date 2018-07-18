module.exports = function (gulp, plugins, config) {
    return function () {
        var sources = [];
        for (var i in config.build.fonts.sources) {
            sources[i] = config.build.fonts.dir + "/" + config.build.fonts.sources[i];
        }

        var result = gulp.src(sources);

        if (config.build.fonts.flatten) {
            result = result.pipe(plugins.flatten());
        }

        result = result
                .pipe(gulp.dest(config.build.dist + (config.build.fonts.dest !== "" ? "/" + config.build.fonts.dest : "")))
                .on('end', function() {
                    if (typeof config.build.fonts.callback !== "undefined") {
                        config.build.fonts.callback();
                    }
                });

        return result;
    };
};