/* ============================== for문 ======================================*/
// for (초기구문; 조건구문; 변화구문;) { 코드 };

for (let i = 0; i < 10; i ++) {
   // console.log(i);
}

for (let j = 10; j > 0 ; j -=2) {    // 2씩 빼기
   // console.log(j);
}

/* ===================== for 문과 배열을 함께 사용 하기 =======================*/
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i ++) {
   // console.log(names[i]);
}


/* ============================== while 문 ======================================*/
let i = 0;

while ( i < 10 ) {
   // console.log(i);
    i ++;
}

/* ============================== while 문 예제======================================*/
let a = 0;
let isFun = false;

while (!isFun) {        // isFun === false
    //console.log(a);
    a++;
    if (a === 30) {
        isFun = true;
    }
}

/* ================================= for of ========================================*/
const array = [10,20,30,40,50];

for (let number of array) {
    console.log(number);
}



const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

 console.log(Object.keys(doggy));
 console.log(Object.values(doggy));
 console.log(Object.entries(doggy));


/* ================================= for in ========================================*/
for (let key in doggy) {
    // console.log(key);
    console.log(` ${key} : ${doggy[key]}`)
}

/* ============================= break continue ========================================*/

for (let b = 0; b < 10; b++) {
    if ( b === 2 ) continue;                 //다음루프
    console.log(b);
    if ( b === 5 ) break;                    //끝내기
}


/* ============================= 예제 ========================================*/

function sumOf(numbers) {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    return sum;
}
const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);


function sumOfnumber(arr) {
    let sum = 0;
    for (let d = 0; d < arr.length; d++) {
        sum += arr[d];
    }
    return sum;
}

const result2 = sumOfnumber([1, 2, 3, 4, 5]);
console.log(result2);



/* ============================= 예제 ========================================*/
function biggerThanThree(numbers) {
    /* 구현해보세요 */
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 3) {
        arr.push(numbers[i]);
      }
    }
    return arr;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]





  

function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    

  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  

