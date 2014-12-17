/*
 * grunt-dtsm
 * https://github.com/vvakame/grunt-dtsm
 *
 * Copyright (c) 2014 vvakame
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var dtsm = require("dtsm");

    grunt.registerMultiTask("dtsm", "Install .d.ts files by dtsm", function () {
        var options = this.options({
            config: "dtsm.json"
        });

        var done = this.async();

        if (!grunt.file.exists(options.config)) {
            grunt.log.error(options.config + " is not exists");
            return done(false);
        }

        dtsm
            .createManager({
                configPath: options.config
            })
            .then(function (manager) {
                return manager.installFromFile();
            })
            .then(function (result) {
                var depNames = Object.keys(result.dependencies);
                grunt.log.ok(depNames.length + " files created.");
                depNames.forEach(function (depName) {
                    grunt.log.verbose.ok(depName);
                });
                done(true);
            }, function (error) {
                grunt.log.error(error);
                done(false);
            });
    });
};
