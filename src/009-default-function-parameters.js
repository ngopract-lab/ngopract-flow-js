// @flow
function acceptsOptionalString(value: string = 'foo') {
  // ...
}

acceptsOptionalString("bar"); // OK
// acceptsOptionalString(undefined); // ERROR
// acceptsOptionalString(null); // ERROR
// acceptsOptionalString(); // ERROR
