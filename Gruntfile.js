/*
 * grunt-dtsm
 * https://github.com/vvakame/grunt-dtsm
 *
 * Copyright (c) 2014 vvakame
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        dtsm: {
            default_options: {
                options: {
                    config: "test/fixtures/jquery-dtsm.json"
                }
            },
            custom_options: {
                options: {
                    config: "test/fixtures/atom-dtsm.json"
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        },

        conventionalChangelog: {
            options: {
                changelogOpts: {
                    // conventional-changelog options go here
                    preset: "angular"
               },
               context: {
                    // context goes here
               },
               gitRawCommitsOpts: {
                    // git-raw-commits options go here
               },
               parserOpts: {
                    // conventional-commits-parser options go here
               },
               writerOpts: {
                    // conventional-changelog-writer options go here
               }
            },
            release: {
                src: "CHANGELOG.md"
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-conventional-changelog');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'dtsm', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
