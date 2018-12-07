var del = require("del"),
    notifier = require("node-notifier");

module.exports = function (gulp, plugins, config) {
    return function () {
        var notify = typeof config.unbuild.notify !== "undefined" ? config.unbuild.notify : false;

        del(config.unbuild.dir).then(paths => {
            console.log("Files deleted:\n" + paths.join("\n"));

            if (typeof config.unbuild_callback !== "undefined")
            {
                config.unbuild_callback();
            }

            if (notify) {
                notifier.notify({
                    title: "Sponge Rod",
                    message: "Unbuild files completed!"
                });
            }
        });
    };
};