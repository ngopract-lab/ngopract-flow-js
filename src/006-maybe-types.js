/*
Maybe types
===========
Maybe types are for places where a value is optional and you can create
them by adding a question mark in front of the type such as ?string or ?number.

In addition to the type in ?type, maybe types can also be null or void.
*/

// @flow
function acceptsMaybeString(value: ?string) {
  // ...
}

acceptsMaybeString("bar");     // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null);      // Works!
acceptsMaybeString();          // Works!
