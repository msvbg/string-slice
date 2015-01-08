'use strict';
var StringIterator = require('es6-iterator/string');
var stringLength = require('string-length');

module.exports = function (str, beginSlice, endSlice) {
    var iter = new StringIterator(str),
        length = stringLength(str),
        slice = '';

    if (beginSlice < 0) {
        beginSlice = length + beginSlice;
    }

    if (endSlice === void 0) {
        endSlice = length;
    } else if (endSlice < 0) {
        endSlice = length + endSlice;
    }

    var n = 0;
    for (var it = iter.next(); !iter.done; ++n, it = iter.next()) {
        if (it.value && n >= beginSlice && n < endSlice) {
            slice += it.value;
        } else if (n >= endSlice) {
            break;
        }
    }

    return slice;
};
