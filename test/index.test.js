'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { parseDuration } = require('../src');

test('parses hours and minutes', () => assert.equal(parseDuration('1h30m'), 5400));
test('allows spaces', () => assert.equal(parseDuration('2d 3s'), 172803));
test('rejects junk', () => assert.throws(() => parseDuration('soon'), SyntaxError));
