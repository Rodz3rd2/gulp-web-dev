var del = require("del"),
    notifier = require("node-notifier");

module.exports = function (gulp, plugins, config) {
    return function () {
        del(config.unbuild_dir).then(paths => {
            console.log("Files deleted:\n" + paths.join("\n"));

            if (typeof config.unbuild_callback !== "undefined")
            {
                config.unbuild_callback();
            }

            notifier.notify({
                title: "Sponge Rod",
                message: "Unbuild files completed!"
            });
        });
    };
};