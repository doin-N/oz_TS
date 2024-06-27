//배열 타입 방법 1 : type[]

//숫자만 허용
let nums: number[] = [1, 2, 3, 4, 5, 6, 7];
//문자만 허용
let strs: string[] = ["일", "이", "삼", "사", "오", "육", "칠"];
//불리언만 허용
let bools: boolean[] = [true, false, true, false, true, false, true];

nums.push(9);
nums.push(13);

// nums.push("7")
// num[0] = "2"

// bools.push(1)
// //문자열 타입을 숫자타입에 넣을수 없기 때문에 에러가 발생

// 배열 타입 방법 2 : Array<>
// let nums: Array<number> = [1,2,3,4,5,6,7]
// let strs: Array<string> = ["일", "이", "삼", "사", "오", "육", "칠"]

// nums.push(9)
// nums.push(13)

// nums.push("7")
// num[0] = "2"
