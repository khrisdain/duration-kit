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

module.exports = { parseDuration, UNITS };
