//parameter
function add(x: number, y: number): number {
  return x + y;
}
//두 파라미터의 타입을 짐작하는 예시
// add("", 1)
// add(1, "")
// add(1, 1)
//리턴값을 어떤 타입일까? 생각해보게 만든다. ()괄호 뒤에 붙은 :넘버는 리턴값에 대한 타입을 명시해준것

// 파라미터와 반환값에 타입을 지정함으로 함수를 호출하는 시점에 숫자를 전달해야 하며 반환값이 숫자라는 사실을 확인 할수
// const result = add(10, 5);

// function addToCart(name: string, price: number, quantity: number) {
//   return `${name}, ${price}, ${quantity}`;
// }
//설정한 인수만큼 전달하지 않으면 오류 메세지가 뜸
// addToCart("orange", 100)
// addToCart("apple", 100, 20, false)
// addToCart("pineapple", 200, 5);

//Default Parameter 기본값 설정____quantity에 기본값을 설정해놓았을떄
// function addToCart(name: string, price: number, quantity: number =1) {
//   return `${name}, ${price}, ${quantity}`;
// }

// addToCart("orange", 10); //"orange, 10, 1"반환
// addToCart("pineapple", 10, 7); //"pineapple, 10, 3"반환

//optional parameter

function addToCart(name: string, price: number, quantity?: number) {
  return `${name}, ${price}, ${quantity || 1}`;
}

addToCart("orange", 1150); //3번째 파라미터는 전달이 안됐기 때문에 언디파인드가됨
addToCart("grape", 2150, 3);
//그래서 옵셔널 파라미터 같은경우 파라미터가 전달되지 않을 경우를 대비해서
// if(quantity) {logic 처리 또는 } ${quantity || 1} 이런식으로 설정을 해둬야함

//Contextual Typing 문맥상 타이핑
// 배열메소드를 사용시 콜백함수를 사용하는데 ..... 자동유추 시스템을 사용가능
// const numbers: number[] = [1,2,3,4,5];
// const letters: string[] = ["a", "b", "c", "d", "e" ];

// numbers.map(element=> {
//     element.
// })
// letters.forEach(letter => {
//     letter.
// })

//Return type annotation
function addTwoValues(x: number, y: number): string {
  return `${x}${y}`;
}

function addTwoNumbers(x: number, y: number): number {
  return x + y;
}

function isTen(x: number, y: number): boolean {
  return x + y === 10;
}

//void,never
function logMessage(message: string): void {
  console.log(message);
}

// 해당
function therowError(message: string): never {
  throw new Error(message);
}
