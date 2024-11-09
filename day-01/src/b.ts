// type keyInput = 'up' | 'down' | 'left' | 'right';

// enum Direction {
//   up=1,
//   down="DOWN",
//   left,
//   right,
// }
// function doSomthing(keyPressed: Direction): void {
//do something
// }
// doSomthing(Direction.left);

function first<T>(arr: T[]): T {
  return arr[0];
}
const firstElement = first<string>(['hello', 'its', 'sparsh']);
console.log(firstElement);
