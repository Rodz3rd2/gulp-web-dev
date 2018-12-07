var _ = require("underscore");

module.exports = function (gulp, plugins, config, commands) {
    return function() {
        gulp.watch(_.map(_.values(config.scripts.entries), function(entry) {
            return "./" + entry;
        }), [commands.scripts]);
    };
};
