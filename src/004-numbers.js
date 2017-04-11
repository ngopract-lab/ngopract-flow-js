// @flow
function acceptsNumber(value: number): number {
  return value;
}

acceptsNumber(42);       // Works!
acceptsNumber(3.14);     // Works!
acceptsNumber(NaN);      // Works!
acceptsNumber(Infinity); // Works!
// acceptsNumber("foo");    // Error!
