//기본 문법
let myTuple: [string, number, boolean];

myTuple = ["hello", 15, false];
// myTuple = [15, false, "hello"];//error

//사용 예시 1
function getUserInfo(): [number, string] {
  return [1, "Sam"];
}

const [userid, username] = getUserInfo();

//사용예시 2
type Flaver = string;
type Price = number;

type IceCream = [Flaver, Price];

const vanila: IceCream = ["Vanila", 500];

vanila[0];
vanila[1];

//사용예시 3 배열의 내부요소
type lot = number;
type lng = number;

type coord = [lot, lng];

let coords: coord[] = [];

coords.push([36, -95]);
coords.push([38, -76]);

// coords.push([false, "1"]) //오류

for (const [lot, lng] of coords) {
  console.log(lot, lng);
}
