//기본 문법
// interface 이름 {
//     속성이름:속성타입;
//     속성이름2: 속성타입;
//     메서드이름(): 메서드타입;
// }

interface Person {
  name: string;
  age: number;
  isPremium: boolean;
  someMethod(): void;
}

const personA: Person = {
  name: "Bill",
  age: 20,
  isPremium: false,
  someMethod() {
    console.log("some method called");
  },
};

//type alias vs interface
//두 기능의 목적은 크게 다르지 않음

//readonly & optional property

interface User {
  readonly id: number;
  name: string;
  isPremium?: boolean;
}

const testUser: User = {
  id: 100,
  name: "John",
};

// testUser.id = 200

// 매서드/함수 타입

interface Users {
  readonly id: number;
  name: string;
  isPremium: boolean;
  greet(message: string): string;
}

const testUsers: Users = {
  id: 100,
  name: "Nathan",
  isPremium: false,
  greet(message: string) {
    return `${message}, ${this.name}`;
  },
};

testUsers.greet("hello"); // Hello, Nathan

//확장 및 조합

interface Persons {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

interface Student extends Persons, Employee {
  studenId: number;
}
// student = name,age+studenId까지 가지게됨

const personB: Persons = {
  name: "Eli",
  age: 30,
};

const studentB: Student = {
  name: "john",
  age: 20,
  studenId: 100,
  employeeId: 1212,
};
