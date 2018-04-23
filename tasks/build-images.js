var imagemin = require("gulp-imagemin");

module.exports = function (gulp, plugins, config) {
    return function () {
        var sources = [];
        for (var i in config.build.images.sources) {
            sources[i] = config.build.images.dir + "/" + config.build.images.sources[i];
        }

        var result = gulp.src(sources)
                        .pipe(plugins.cache(imagemin({
                            interlaced: true
                        })));

        if (config.build.images.flatten) {
            result = result.pipe(plugins.flatten());
        }

        result = result.pipe(gulp.dest(config.build.dist + (config.build.images.dest !== "" ? "/" + config.build.images.dest : "")));

        return result;
    };
};