// @flow
function method(x: number, y: string, z: boolean): string {
  // we cannot concat using x + y + z since x is number and z is boolean
  return String(x) + y + String(z);
}

method(3.14, "hello", true);
