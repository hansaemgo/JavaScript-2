//삼항 연산자의 사용법 => 조건 ? true일때 : false일때

const array = [1, 2];
let text = "";
if (array.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}
console.log(text);

const array2 = [];
let text2 =
  array2.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다";
console.log(text2);

// 이런 연산은 If문 쓰는 것이 좋음
const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우!" : condition2 ? "blabla" : "foo";

console.log(value);
