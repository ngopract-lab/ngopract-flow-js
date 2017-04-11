// @flow
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string,
};

function method(val: MyObject) { /* ... */ }

method({ foo: 5, bar: true, baz: "coolz!" })
