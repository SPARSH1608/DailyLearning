// // // let x: number = 1;
// // // // x = 'sparsh';
// // // console.log(x);

// // // const greed = (firstName: string, age: number) => {
// // //   console.log('hello' + firstName);
// // // };
// // // greed('sparsh', 2);

// // function sum(a: number, b: number): number {
// //   return a + b;
// // }
// // const value = sum(1, 2);
// // console.log(value);

// // function isLegal(age: number): boolean {
// //   return age > 18;
// // }
// // let ans: boolean = isLegal(25);
// // console.log(ans);

// // function runAfter(fn: () => void) {
// //   setTimeout(() => fn(), 1000);
// // }

// // runAfter(function () {
// //   console.log('hi there');
// // });

// function isLegal(user: User): boolean {
//   return user.age > 18;
// }
// function greet(user: User): string {
//   return 'hello' + user.firstName;
// }

// isLegal({
//   firstName: 'sparsh',
//   lastName: 'goel',
//   age: 19,
// });

// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };
// interface User {
//   firstName: string;
//   lastName: string;
//   age?: number; // optional argument
// }
type id = string | number;
function printId(uid: id) {
  console.log(uid);
}
printId(1);
// print('2');
