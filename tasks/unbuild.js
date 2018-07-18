var del = require("del");

module.exports = function (gulp, plugins, config) {
    return function () {
        del([config.unbuild_dir]).then(paths => {
            console.log("Successfully deleted " + config.unbuild_dir);

            if (typeof config.unbuild_callback !== "undefined")
            {
                config.unbuild_callback();
            }
        });
    };
};