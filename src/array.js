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











