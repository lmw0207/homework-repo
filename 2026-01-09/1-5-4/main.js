// 1. 계산 함수들 -> [math.js]로 이동 예정
// function add(a, b) {
//   return a + b;
// }
import { add, sub } from "./math.js";

// function sub(a, b) {
//   return a - b;
// }

// 2. 프로필 데이터 -> [userProfile.js]로 이동 예정
// const userProfile = {
//   name: "홍길동",
//   age: 20,
// };
import userProfile from "./userProfile.js";

// 3. 실행 로직 (main.js에 유지)
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile);
