var _ = require("underscore");

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        var base = "";
        if (typeof config.scripts.options !== "undefined") {
            if (typeof config.scripts.options.base !== "undefined") {
                base = config.scripts.options.base;
            }
        }

        if (_.isEmpty(base)) {
            gulp.watch(_.map(_.values(config.scripts.entries), function(entry) {
                return "./" + (_.isEmpty(base) ? "" : base.replace("/\/$/", "") + "/") + entry;
            }), [commands.scripts]);
        } else {
            gulp.watch(base.replace("/\/$/", "") + "/**/*.js", [commands.scripts]);
        }
    };
};
