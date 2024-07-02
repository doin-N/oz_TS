// 표현식 as 지정할 타입

const someValuew: unknown = "Hey there";

//const len = someValue.length; 값의 길이를 읽어올려하는데 랭스는 문자열에 사용하는 것이기 때문에 값이 언노운이라 에러가남

const len = (someValuew as string).length;
// 변수의 타입이 확실히 보장될때 타입단언을 지정해줄수있다.
//괄호 안에서는 문자열로 취급한다.
