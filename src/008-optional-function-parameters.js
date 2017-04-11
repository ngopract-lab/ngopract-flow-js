// @flow
function acceptsOptionalString(value?: string) {
  // ...
}

acceptsOptionalString("bar");
acceptsOptionalString(undefined);
acceptsOptionalString(null);
acceptsOptionalString();
