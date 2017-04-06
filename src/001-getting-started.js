// @flow
function square(n: number): number {
  return n * n;
}

// ERROR
// function squareOld(n: number): number {
//   return "a deviant string";
// }

square(2); // OK
// square("Boom"); // ERROR
