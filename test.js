'use strict';

var assert = require('assert');
var stringSlice = require('./');

describe('string-slice', function () {
    it('should return an empty string on empty string arguments', function () {
        assert.strictEqual(stringSlice('', 0, 0), '');
        assert.strictEqual(stringSlice('', -999, 999), '');
    });

    it('should slice simple strings', function () {
        assert.strictEqual(stringSlice('abcd', 0, 2), 'ab');
        assert.strictEqual(stringSlice('abcd', 1, 2), 'b');
        assert.strictEqual(stringSlice('abcd', 2), 'cd');
    });

    it('should handle negtive indices', function () {
        assert.strictEqual(stringSlice('abcdef', -1), 'f');
        assert.strictEqual(stringSlice('abcdef', -3, -1), 'de');
        assert.strictEqual(stringSlice('abcdef', 0, -1), 'abcde');
    });

    it('should slice strings with astral symbols', function () {
        var str = '\uD835\uDC00\uD835\uDC01\uD835\uDC02\uD835\uDC03';

        assert.strictEqual(stringSlice(str, 3), '\uD835\uDC03');
        assert.strictEqual(stringSlice(str, 1, 3), '\uD835\uDC01\uD835\uDC02');
        assert.strictEqual(stringSlice(str, -1), '\uD835\uDC03');
        assert.strictEqual(stringSlice(str, 0, -2), '\uD835\uDC00\uD835\uDC01');
    });
});
