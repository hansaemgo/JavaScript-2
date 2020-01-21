
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
const dogdog = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function () {                         //function 이름 생략해도 가능 
        console.log(this.sound);                //this -> 함수가 위치한 자기자신의 객                                                                    // 단, 화살표 함수로 만들면 작동 안함 (this가 뭔지 모름)
    }    
};

const cat ={
    name : '야옹이',
    sound : '야옹~'
};

cat.say = dogdog.say;
cat.say();
dogdog.say();



/*============================= 객체 Getter와 Setter ======================*/

const numbers = {
    a : 1,
    b : 2,
    get sum() {                                            // Getter함수 어떤값을 무조건 반환( return )
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum)


const mouse = {
    _name : '쥐돌이',                                      
    set name(value) {                                      // 파라미터 무조건 설정해야함
        console.log('이름이 바뀝니다....' +  value);
        this._name = value;
    }
};

console.log(mouse._name);
mouse.name = '쥐순이';
console.log(mouse._name);


/*============================= 객체 Getter와 Setter  예제 ======================*/

const num = {
    _a : 1, 
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;     // 자신의 값 리턴
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}


console.log(num.sum);
num.a = 5;
num.b = 40;
console.log(num.sum);

/*============================= 객체 Getter와 Setter  예제 2 ======================*/

const person = {
    firstName : 'Go',
    lastName : 'Hansaem',
    get fullName () {
        return  `${person.firstName} ${person.lastName}` 
    },
    set fullName(value) {
       const parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};

// getter => access properties 
// setter => change ( mutate ) them


person.fullName = 'kim jihyun';
console.log(person);