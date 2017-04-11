/*
Optional object properties

Object types can have optional properties where a question mark ?
comes after the property name.
*/
// @flow
function acceptsObject(value: { optionalProp?: string }) {
  // ...
}

acceptsObject({ foo: "bar" });     // Works!
acceptsObject({ foo: undefined }); // Works!
acceptsObject({ foo: null });      // Error!
acceptsObject({});                 // Works!
