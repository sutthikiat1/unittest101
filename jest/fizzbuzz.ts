export function Say(x: number) {
  if (x % 3 == 0 && x % 5 == 0) {
    return "fizz buzz";
  } else if (x % 3 == 0) {
    return "fizz";
  } else if (x % 5 == 0) {
    return "buzz";
  } else {
    return x;
  }
}
