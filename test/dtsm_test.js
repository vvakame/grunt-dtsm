'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.dtsm = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var base = "tmp/jquery-dtsm/typings/";
        var exists = grunt.file.exists(base + "jquery/jquery.d.ts");
        test.ok(exists);

        test.done();
    },
    custom_options: function (test) {
        test.expect(1);

        var base = "tmp/atom-dtsm/typings/";
        var targets = [
            base + "atom/atom.d.ts",
            base + "emissary/emissary.d.ts",
            base + "jquery/jquery.d.ts",
            base + "mixto/mixto.d.ts",
            base + "node/node.d.ts",
            base + "pathwatcher/pathwatcher.d.ts",
            base + "q/Q.d.ts",
            base + "space-pen/space-pen.d.ts",
            base + "status-bar/status-bar.d.ts",
            base + "text-buffer/text-buffer.d.ts"
        ];
        var allExisits = targets
            .map(function (target) {
                return grunt.file.exists(target);
            })
            .every(function (exists) {
                return exists;
            });
        test.ok(allExisits);

        test.done();
    }
};
