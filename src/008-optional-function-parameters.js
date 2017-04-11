// @flow
function acceptsOptionalString(value?: string) {
  // ...
}

acceptsOptionalString("bar"); // OK
// acceptsOptionalString(undefined); // ERROR
// acceptsOptionalString(null); // ERROR
// acceptsOptionalString(); // ERROR
