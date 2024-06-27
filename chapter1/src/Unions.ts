//유니언 기초

// 추가 타입을 지정하고 싶을 때 | 사용하여 연속 추가 가능 추가한 타입외에 다른타입은 사용 불가
let userId: string | number | boolean;

userId = 1;
userId = "100";

// userId = true;
// userId = {};

function printUerId(id: string | number) {
  console.log(id);
}

printUerId("1");
printUerId(1);
// printUerId({}) //스트링 또는 넘버가 아니기 때문에 오류가 남

//type narrowing 타입 좁히기 사용가능한 변수의 타입을 좁혀서 타입관련 오류를 예방하기 위해 사용
//함수의 파라미터가 유니언타입일 경우 굉장히 자주쓰이는 패턴
function processValue(value: number | string) {
  //문자열 경우
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  //숫자의 경우
  return value.toString().toUpperCase();

  //return value.toUpperCase();
  //toUpperCase 스트링 타입이기 때문에 오류가 난다.
  //근데 여기서 오류 왜나는거지?
  //value는 넘버나 스트링이 될수있는데 toUpperCase메서드는 스트링 메서드이다.
  //그래서 문자의 내용이 들어가면 상관없지만 숫자가 들어가면 오류가 나게됨 이럴경우 예방차원에서 사용하는게 type narrowing
}

//배열 사용 예시
//추가로, 배열을 사용하기 전에 초기화해야 합니다.
// 초기화하지 않으면 undefined 값에 접근하려고 시도하게 되어 런타임 에러가 발생할 수 있습니다.
// 초기화는 배열을 빈 배열로 할당하여 해결할 수 있습니다:
let mixedValuse: (string | number)[] = [];

mixedValuse.push("100");
mixedValuse.push(100);
// mixedValuse.push([]); //오류: 빈 배열은 (string | number) 타입이 아닙니다.

//리터럴과 유니언 타입 __ 리터럴은 타입자체를 값과 타입으로 동시에 사용할수있는 타입 ___ 굉장히 자주쓰이는 타입
// let id: "1";
// id = "2"; //오류 _ id의 값을 1로 설정했기때문에 다른 값을 설정할수 없음

const toggle = (option: "on" | "off") => {
  console.log(option);
};

toggle("on");
toggle("off");
// toggle("true") //오류
// toggle(0) //오류

//리터럴과 유니언 타입은 타입별칭을 만들어 재사용 하는것이 일반적
type Size = "xs" | "s" | "m" | "l" | "xl";

let tshirtSizs: Size;

tshirtSizs = "xs";
// tshirtSizs= "xxxl" //오류

//함수파라미터사용시
function setSize(size: Size) {
  switch (size) {
    case "xs":
      break;
    case "s":
      break;
  }
}

//type aliases와 유니언
// api 사용시 네트워크를 사용하는데 거기에 따른 http 응답 토드가 있다. 401,204 등등

type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

let responseCode: SuccessCode | ErrorCode;

responseCode = 200;
// responseCode = 400 //오류
