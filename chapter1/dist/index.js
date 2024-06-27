"use strict";
//문자열 (string)
const a = "";
const b = "";
const c = ``;
let myName = "doin";
let message = `Hello, ${myName}`;
myName.toLocaleLowerCase();
// message = 1;
//이미 스트링 값이기 때문에 다른타입의 값을 넣을수 없음
// 숫자 타입 (number)
let n = 100;
// n = "200";
// n.toUpperCase();
//숫자 타입이기 때문에 다른타입의 메소드 사용 불가
let count = 20;
let price = 77.777;
let temperaturt = -216;
let distance = 3.2e-78;
let total = count * price;
// 넘버타입은 수학연산에도 사용가능
let average = total / 2;
//숫자타입에는 특수값이 존재하는데 그값도 포함가능
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
// 불리언 (boolean) 참또는 거짓 타입
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("열림");
}
if (!isCompleted) {
    console.log("job not completed");
}
//&& || !  논리연산자와 사용가능
let isAvailabel = isOpen && !isCompleted;
// 이즈오픈이 트루 이즈컴플레이트가 펄스일때만 트루가 된다.
//null 널 타입 객체가 존재하지 않고 값이없음을 나타냄
let user = null;
// 유저는 스트링 또는 널 한가지 이상의 값을 가지는걸 유니언 타입이라 한다.
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("doin");
logout();
//any 타입 모든타입을 허용한다는 의미 하지만 안쓰는게 좋음 / 타입체크를 안함
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
//모든타입의 메소드, 값, 재할당도 가능 이렇게되면 타입의 안정성이 감소되어 타입스크립트의 사용이유가 무의미해짐
