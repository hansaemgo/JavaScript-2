
const dogName = '멍멍이';
const dogAge = 2;
console.log(dogName); // 멍멍이
console.log(dogAge);  // 2


// 위의 코드 객체화 하기 
const dog = {
    name : '멍멍이',
    age : 2,
    cute : true,
    sample : {
        A : 1,
        B : 2
    }
}
console.log(dog);
console.log(dog.name); // 멍멍이
console.log(dog.age);  // 2



/*===================어벤져스/캡틴아메리카정보 객체화=================*/

const ironMan = {
    name : '토니스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
    const {alias, name, actor} = hero; // 객체 비구조화 할당  or 객체구조분해
    const text =`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
    console.log(text);
}

 print(ironMan);
 print(captainAmerica);


/*===================파라미터 단계에서 비구조화 할당=================*/

const ironMan2 = {
    name : '토니스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captainAmerica2 = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

console.log(ironMan2);
console.log(captainAmerica2);

function print({alias, name, actor}) { // 파라미터 안에 넣어주기
    const text =`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
    console.log(text);
}

print(ironMan2);
print(captainAmerica2);


/*===================객체 안에 함수 넣기=================*/
const dog = {
    
}
