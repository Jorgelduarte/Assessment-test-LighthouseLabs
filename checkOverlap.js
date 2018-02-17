// Implement a function "checkOverlap", which, when given two objects that represent lines, returns whether they overlap or not.

// Lines are represented in this way: {start: 0, end: 10}

// (end will always be greater than start)

function checkOverlap(lineA, lineB) {
  return lineA.start >= lineB.start && lineA.start < lineB.end ||
  lineA.end > lineB.start && lineA.end < lineB.end ||
  lineB.start > lineA.start && lineB.start < lineA.end ||
  lineB.end > lineA.start && lineB.end < lineA.end;
}