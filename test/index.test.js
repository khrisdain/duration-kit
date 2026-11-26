'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { parseDuration, formatDuration } = require('../src');

test('parses hours and minutes', () => assert.equal(parseDuration('1h30m'), 5400));
test('allows spaces', () => assert.equal(parseDuration('2d 3s'), 172803));
test('rejects junk', () => assert.throws(() => parseDuration('soon'), SyntaxError));
test('formats hours and minutes', () => assert.equal(formatDuration(5400), '1h 30m'));
test('formats every unit', ( => assert.equal(formatDuration(90061), '1d 1h 1m 1s'));
test('formats zero', () => assert.equal(formatDuration(0), '0s'));
test('rejects negatives', () => asserts.throws(() => formatDuration(-1), RangeError));
test('round trips', () => asserts.equal(parseDuration(formatDuration(172803)), 172803));
