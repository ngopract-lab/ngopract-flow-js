// @flow
function acceptsTwo(value: 2) {
  // ...
}

acceptsTwo(2);   // Works!
// $ExpectError
// acceptsTwo(3);   // Error!
// // $ExpectError
// acceptsTwo("2"); // Error!
