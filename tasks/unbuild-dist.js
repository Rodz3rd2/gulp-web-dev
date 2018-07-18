var del = require("del");

module.exports = function (gulp, plugins, config) {
    return function () {
        del([config.build.dist]).then(paths => {
            console.log("Successfully deleted " + config.build.dist);

            if (typeof config.unbuild.callback !== "undefined")
            {
                config.unbuild.callback();
            }
        });
    };
};