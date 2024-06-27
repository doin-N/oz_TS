//기본 객체 타입
// {
//     property_name: property_type
// }

//타입명시방법
// let monitor: { brand: string; price: number }

// monitor.brand = "samsung";
// monitor.price = 10000;

// monitor = {
//   brand: "samsung",
//   price: 10000,
// };

//프로퍼티를 설정해줬기 때문에 다른 프로퍼티를 가질수 없다.
// monitor.displaySize = "22inch";
//프로퍼티 중 하나라도 없다면 오류가 난다.
// monitor = {
//     brand: "samsung",
//   };

//타입추론
let monitor = {
  brand: "samsung",
  price: 10000,
};

//문자열로 바꿔보자 숫자기 때문에 에러남
// monitor.price = " 20000 ";
//프로퍼티가 존자하지 않기때문에 에러남
// monitor.displaySize = "22inch";

//Optional 프로퍼티 객체 내에서 필수가 아닌 프로퍼티
//에러가 나지 않는이유 = age를 필수가 아닌 프로퍼티로 설정했기 때문
// let users: { id: string; name: string; age?: number };
// users = {
//   id: "1234",
//   name: "Lora",
// };

//Readonly 프로퍼티 읽기전용 프로퍼티 / 프로퍼티값을 변경하거나 하면안되는 경우 사용하는것 / 객체가 처음 생성될때만 값을 할당할수이쏙 그이후에는 바꿀수없다.
let users: { readonly id: string; name: string; age?: number };
users = {
  id: "1234",
  name: "Lora",
};

// users.name = "Tom";
// user.id = "4321";
// 이름은 변경가능한데 아이디는 안됨 왜?? id는 읽기전용 프로퍼티이기 때문에 처음할당된 값으로 고정되었기 때문에

let apiConfig: {
  readonly clientKey: string;
  readonly url: string;
};
//위의 값은 런타임에서 절대 변경되면 안되는 값이기 때문에 readonly를 설정 해줘야함..실무에서도 많이 쓰임

//타입별칭 (Type Alias)
//리터럴로만 반복적으로 타입정의를 내리면 코드가 지저분해지고 가독성이 떨어지는 문제점이 발생 이것을 보완하는것
//사용자 정의 타입 조합에 이름을 할당해서 필요한곳에 적용하고 재사용이 가능하게 한다.
type UserType = {
  id: string;
  name: string;
  age: number;
};

let user1: UserType = {
  id: "1",
  name: "John",
  age: 20,
};

let user2: UserType = {
  id: "2",
  name: "tom",
  age: 30,
};
//미리지정한 유절타입엘리어스를 각 객체에 타입지정으로 사용할수있다.

//배열도 가능
let userse: UserType[] = [];

userse.push(user1);
userse.push(user2);

// userse.push({});
// userse.push({
//     id: " 1"
// });
//에러가 발생하는 이유는 유저스배열은 유저타입만 허락하기 때문

//Nested객체 (중첩객체)
type Payload = {
  timestamp: number;
  type: string;
  user: {
    readonly id: string;
    isActive?: boolean;
    email: string[];
  };
};

const payload: Payload = {
  timestamp: 1234567,
  type: "event",
  user: {
    id: "123",
    isActive: true,
    email: ["testemail@gmail.com", "testemail2@gmail.com"],
  },
};
