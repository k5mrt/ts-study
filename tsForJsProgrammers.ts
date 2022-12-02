// TypeScript for JavaScript Programmers
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// 型の定義

// const user = {
//   name: "Hayes",
//   id:0,
// }

// interface User {
//   name: string;
//   id: number;
// }

// const user: User = {
//   name: "Hayes",
//   id: 0
// }

// const user: User = {
//   username: "Hayes",
//   id: 0,
// }


// OOP
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
  // 
}

function deleteUser(user: User) {

}

// interfaceを使って型宣言するのを推奨


// 型の構成

// union
type MyBool = true | false;

type WinsowStatus = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length
}

function wrapInArray(obj: string | string[]) {
  if(typeof obj  === "string") {
    return [obj];
  }
  return obj
}

// generic
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();
backpack.add(23);


// Structural Type System; duck typing
interface Point {
  x: number;
  y: number;
}

function logPoint (p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point); // => "12, 26"

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // => "12, 16"

const rent = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rent); // "33, 3"

const color = { hex: "#0000" };
logPoint(color);


class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
