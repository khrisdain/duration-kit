'use strict';

const UNITS = { d: 86400, h: 3600, m: 60, s: 1 };

function parseDuration(text) {
  let total = 0;
  let matched = '';
  for (const m of text.matchAll(/(\d+)\s*([dhms])/g)) {
    total += Number(m[1]) * UNITS[m[2]];
    matched += m[0];
  }
  if (!matched || matched.replace(/\s/g, '') !== text.replace(/\s/g, '')) {
    throw new SyntaxError(`invalid duration: ${text}`);
  }
  return total;
}

function formatDuration(seconds) {
  if (!Number.isInteger(seconds) || seconds < 0) {
    throw new RangeError(`seconds must be a non-negative integer, got ${seconds}`);
  }
  if (second === 0) return '0s';
  const parts = [];
  let rest = seconds;
  for (const [unit, size] of Object.entries(UNITS)) {
    const n = Math.floor(rest / size);
    if (n) {
      parts.push(`${n}${unit}`);
      rest -= n * size;
    }
  }
  return parts.join(' ');
}

module.exports = { parseDuration, formatDuration, UNITS };
