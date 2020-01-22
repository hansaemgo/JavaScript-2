const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0]);

const object = [{name:'멍멍이'}, {name:'야옹이'}];
console.log(object[0]);
console.log(object.length);


/*======================== 배열 추가 push ===========================*/
object.push( {
    name:'어흥이'
});
console.log(object);
 

/*========================= 배열의 크기 알아내기 length =============================*/
console.log(object.length);


/*===============배열에는 어떤 값이던 넣을 수 있다 ================*/
const array2 = [1, true, {a: 1}, [1,2,3,4]];
console.log(array2[3])

/*========================= 배열 내장함수 forEach =============================*/
const superHeroes = [ '아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지'];

// 배열 순서대로 출력하기 -1 
function print(hero) {
    console.log(hero);
}
superHeroes.forEach(print);


// 배열 순서대로 출력하기 -2
superHeroes.forEach(function(hero){
    console.log(hero)
});


// 배열 순서대로 출력하기 -3  화살표 함수로 짧게
superHeroes.forEach(hero => { 
    console.log(hero)
});


/*========================= 배열 내장함수 map =============================*/

// 배열 제곱하기 - 1 
const array0 = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
    for (let j = 0; j < array0.length; j++) {
        squared.push(array0[j] * array0[j]);
    }
 console.log(squared);


// 배열 제곱하기 - 2
 const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
 
const squared1 = [];
 array1.forEach( n => {
     squared1.push(n * n);
 });
 console.log(squared1);



// map을 사용한 방법 

const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
// const squared2 = n => n * n;                       // 파라미터 n을 받아와서 이를 제곱해주는 함수
// const squared3 = array3.map(squared2)
const squared3 = array3.map( n => n * n)              // 함수내용 직접 넣어줘도 상관없다.

console.log(squared3);


const array4 = [1, 3, 5, 7, 9];

const squared4 = array4.map(n => n + 2);
console.log(squared4);


// items 배열에서 text만 뽑아서 배열 만들기
const items = [
    {
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
];
 
const texts = items.map(item => item.text);
console.log(texts);




/*========================= 배열 내장함수 index of =============================*/

// const superHeroes = [ '아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지'];
const index = superHeroes.indexOf('토르');
console.log(index);

const index2 = superHeroes.indexOf('닥터스트레인지');
console.log(index2);




/*========================= 배열 내장함수 findIndex =============================*/

const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true,
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true,
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true,
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false,
    }
]

const index3 = todos.findIndex(todo => todo.id === 3 );  // 원소가 몇번째인지 알려준다 
console.log(index3);

const index4 = todos.find(todo => todo.done === false ); // find => 값 자체를 반환
console.log(index4);

const tasksNotDone = todos.filter(todo => todo.done === false); //  (todo => !todo.done);
console.log(tasksNotDone);

const tasksDone = todos.filter(todo => todo.done === true);
console.log(tasksDone);


/*========================= 배열 내장함수 splice =============================*/

const numbers = [10, 20, 30, 40, 50];

const spliceIndex = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(numbers)                                         // 남은 원소 보여주기
console.log(spliced)                                        // 사라진 원소 보여주기

// 기존 배열 건드린다


/*========================= 배열 내장함수 slice =============================*/

const numbers2 = [10, 20, 30, 40, 50];
const sliced = numbers2.slice(0, 2);
console.log(sliced);
console.log(numbers2)

// 기존 배열 건드리지 않는다.


/*========================= 배열 내장함수 shift =============================*/

const numbers3 = [10, 20, 30, 40, 50];
const value = numbers3.shift();
numbers3.shift();
numbers3.shift();
numbers3.shift();
console.log(numbers3)

/*========================= 배열 내장함수 pop =============================*/

const numbers4 = [10, 20, 30, 40, 50];
const value1 = numbers4.pop();
console.log(numbers4)
// 왼쪽에서 배열 추가


/*========================= 배열 내장함수 unshift =============================*/

const numbers6 = [10,20,30,40,50]
const value3 = numbers6.unshift(5);
console.log(numbers6);
//  왼쪽에서 배열 추가



/*========================= 배열 내장함수 push =============================*/

const numbers5 = [10,20,30,40,50]
const value2 = numbers5.push(2);
console.log(numbers5);




/*========================= 배열 내장함수 push & pop  =============================*/

const arr = [1, 2, 3, 4, 5];
const valueArr = arr.push(6);
const valluArr = arr.pop();
console.log(arr);
console.log(arr);



/*========================= 배열 내장함수 shift & unshift  =============================*/

const arr2 = [1, 2, 3, 4, 5];
const valueAr2r = arr2.shift();
const valluArr2 = arr2.unshift(100); 
console.log(arr2);
console.log(arr2);



/*===================================== 배열 내장함수 concat  =============================*/

const arra = [1, 2, 3];
const arrb = [4, 5,6 ];

const concated = arra.concat(arrb);
// 스프레드 연산자
// const concated = [...arra, ...arrb];
console.log(concated)


/*===================================== 배열 내장함수 join  =============================*/

const arrayJoin = [1, 2, 3, 4, 5];

console.log(arrayJoin.join());
console.log(arrayJoin.join( ' / ' ));
console.log(arrayJoin.join( ', ' ));

/*===================================== 배열 내장함수 reduce  =============================*/


// 기존 방법 forEach
const num = [1, 2, 3, 4, 5];
    let sumNum = 0;
    num.forEach(n => {
        sumNum += n;
    });

console.log(sumNum);


// reduce 사용 방법
const num1 = [1, 2, 3, 4, 5];
const avg = num1.reduce((accumelator, current, index, array) => {  
    // 콜백함수의 네 인수 
    if (index === array.length - 1 ) {
       return (accumelator + current) / array.length;
     }
     return accumelator + current;
}, 0);
console.log(avg);


// reduce 예제
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    };
    return acc;
}, { });

console.log(counts);




/*===================================== 배열 내장함수 reduce 퀴즈 =============================*/


// 10 보다 큰 수의 갯수 -1
function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  



// 10 보다 큰 수의 갯수 -2
  function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;



  

// 10 보다 큰 수의 갯수 -3
  function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    let count = 0;
    numbers.forEach(n => {
      if (n > 10) {
        count++;
      }
    });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  
  


















