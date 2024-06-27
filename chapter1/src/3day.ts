// 1. 배열 타입
//   책의 제목을 담고 있는 배열을 생성하세요.
//   배열에는 최소 5개의 책 제목을 포함시키세요.
let books: string[] = [
  "참을 수 없는 존재의 가벼움",
  "버터",
  "이웃집 아이를 차로 치고 말았어",
  "19호실로 가다",
  "루스터하우스",
];

// 2. 객체 타입
//   책을 나타내는 객체 타입(Book)을 정의하세요.
//   책 객체는 title, author, publicationYear, isAvailable 속성을 가져야 합니다.
//   책 객체의 예시 데이터를 하나 만드세요.
type book = {
  title: string;
  author: string;
  publicationYear: string;
  isAvailable: boolean;
  price?: number;
};

const book1: book = {
  title: "참을 수 없는 존재의 가벼움",
  author: "밀란 쿤데라",
  publicationYear: "2018.06.20",
  isAvailable: true,
  price: 15300,
};

const book2: book = {
  title: "이웃집 아이를 차로 치고 말았어",
  author: "그렉 올슨",
  publicationYear: "2018.10.05",
  isAvailable: false,
};

// 3. 함수 타입
// 책의 가용성을 변경하는 함수 타입(UpdateAvailability)을 정의하세요.
// 함수는 책 객체와 새로운 가용성 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
// 함수의 예시 구현을 작성하세요.
type UpdateAvailability = (book: book, newisAvailable: boolean) => void;

const updateAvailability: UpdateAvailability = (book, newAvailability) => {
  book.isAvailable = newAvailability;
};

//book1
console.log(book1.isAvailable); // true
updateAvailability(book1, false);
console.log(book1.isAvailable); // false

//book2
console.log(book2.isAvailable); // false
updateAvailability(book2, true);
console.log(book2.isAvailable); // true

// 4. 유니언 타입
//   책의 상태를 나타내는 유니언 타입(BookStatus)을 정의하세요. 상태는 "available", "checked out", "reserved" 세 가지로 한정합니다.
//   책 상태를 변경하는 함수를 작성하세요. 함수는 책 객체와 새로운 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
//   함수의 예시 구현을 작성하세요.

type BookStatus = "available" | "checked out" | "reserved";

let newStatus = (book: book, status: BookStatus) => {
  book.isAvailable = status == "available";
};

newStatus(book1, "checked out");
console.log("newStatus", book1);

// 5. 인터페이스
//   도서관 시스템을 위한 인터페이스(Library)를 정의하세요. 이 인터페이스는 다음 메서드를 포함해야 합니다:
//   books: Book 객체의 배열
//   addBook: 책을 추가하는 메서드
//   removeBook: 책을 제거하는 메서드
//   인터페이스를 구현하는 예시 코드를 작성하세요.

interface Library {
  books: book[];
  addBook(newBook: book): void;
  removeBook(title: string): void;
}

const Library: Library = {
  books: [],
  addBook(newBook: book): void {
    this.books.push(newBook);
    console.log(`${newBook.title} han been added to th library.`);
  },
  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
    console.log(`${title} has been removed from the library.`);
  },
};

// 책 추가
Library.addBook(book1);
Library.addBook(book2);

// 책 제거
Library.removeBook("참을 수 없는 존재의 가벼움");

// 6. 튜플
//   책의 제목과 저자를 담고 있는 튜플(BookInfo)을 정의하세요.
//   튜플의 예시 데이터를 하나 만드세요.

let BookInfo: [string, string];

BookInfo = ["참을 수 없는 존재의 가벼움", "밀란 쿤데라"];
BookInfo = ["이웃집 아이를 차로 치고 말았어", "그렉 올슨"];

// const bookInfo: BookInfo = ['The Catcher in the Rye', 'J.D. Salinger'];
// console.log('Book Info Tuple:', bookInfo);

// 7. 열거형
//   책의 장르를 나타내는 열거형(Genre)을 정의하세요.
//   Genre는 Fiction, NonFiction, Fantasy, Biography, ScienceFiction, Romance 여섯 가지 값을 가집니다.
//   Book 타입을 확장하여 DetailedBook 타입을 정의하세요. 이 타입은 기존 Book 타입에 genre 속성을 추가로 가져야 합니다.
//   DetailedBook 객체의 예시 데이터를 하나 만드세요.

enum Genre {
  Fiction,
  NonFiction,
  Fantasy,
  Biography,
  ScienceFiction,
  Romance,
}

type DetailedBook = book & {
  genre: Genre;
};

const detailedBook: DetailedBook = {
  title: "리틀라이프",
  author: "한야 야나기하라",
  publicationYear: "2016",
  isAvailable: true,
  genre: Genre.ScienceFiction,
};
console.log("Detailed Book Object:", detailedBook);
