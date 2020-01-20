// (특정 값들의 합 구하기)
const a = 1;
const b = 2;
const sum1 = a + b;


// 위의 코드 함수로 만들기
// function 함수이름(파라미터)
function add (c, d) {
  return c + d;
  console.log('호출이 되지 않는 코드!');
}
const sum = add(5, 10);
console.log(sum);


// name 파라미터를 넣으면 콘솔에 hello name! 출력
function hello(name) {
  console.log('hello ' + name + '!');
}
hello('Mark');


// 위의 코드 템플릿리터럴 사용
function hello1(name) {
  console.log(`hello ${name}!`);
}
hello1('멍멍이');


// 다음과 같은 코드로도 사용 가능하지만 return뒤에 호출되지 않으므로 코드 길어짐
function hello2(name) {
  return `hello ${name}!`
}
const result = hello2('거북이');
console.log(result);



/*=================== 점수를 성적등급으로 변환하기 ============*/

function getGrade(score) {
  if ( score === 100 ){
    return 'A+';
  } else if ( score >= 90 ){
    return 'A';
  } else if ( score === 89 ){
    return 'B+';
  } else if ( score >= 80 ){
    return 'B';
  } else if ( score === 79 ){
    return 'C+';
  } else if ( score >= 70 ){
    return 'C';
  } else if ( score === 69 ){
    return 'D+';
  } else if ( score >= 60 ){
    return 'D';
  } else {
    return 'F';
  }  
}

const grade = getGrade(30);
console.log(grade);


/*======================= 화살표 함수 만들기 ====================*/
// const add2 = (x, y) => {
//   return x + y ;
// }
// console.log(add2(4, 3));

 const add2 = (x, y) => x + y;
 const sum2 = add2(10, 20);
 console.log(sum2);
 

const hello3 = (name) => {
  console.log(`hello ${name}!`);
}

hello3('야옹이');





