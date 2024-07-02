// <타입>

// 1. 기본 타입
// function genericFunction<T>(arg: T):T {
//     return arg;
// }

// interface GenericInterface<T> {}

// class GenericClass<T> {}

//Array<string>
let number: Array<number> = [1, 2, 3, 4, 5];
let string: Array<string> = ["1", "2", "3", "4", "5"];

let div = document.querySelector<HTMLDibvElement>("#myDiv1");
let button = document.querySelector<HTMLButtonElement>("#myButton1");
