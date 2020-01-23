// 클래스 생성

class Animal { 
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {                         // 함수구현가능 (클래스 내부에서 생성하면 프로토타입으로 등록됨)
        console.log(this.sound);
    }
}

console.log(Animal.prototype.say);

const dog = new Animal ('개','멍멍이', '멍멍');
const cat = new Animal ('고양이', '야옹이', '야옹');

// dog.say();
// cat.say();




/*=============================== Class 상속받기 ===================================*/

class Animal2 {
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
} 

class Dog2 extends  Animal2 {
    constructor(name, sound) {
        super ('개', name, sound);
    }
}

class Cat2 extends  Animal2 {
    constructor(name, sound) {
        super ('고양이', name, sound);
    }
}

class Cat3 extends  Animal2 {
    constructor(name, sound) {
        super ('고양이', name, sound);
    }
}

const dog2 = new Dog2( '멍멍이', '멍멍');
const cat2 = new Cat2('야옹이', '야옹');
const cat3 = new Cat3('야홍이', '야홍');


dog2.say();
cat2.say();
cat3.say();



/*=============================== Food Class 예제 ===================================*/

class Food {
    constructor (name) {
        this.name = name;
        this.brands = [];
    }
    //클래스 내부의 함수 (메서드)
    addBrand(brand) {
        this.brands.push(brand) 
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들 : `)
        console.log(this.brands.join( ', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노피자');

const chicken = new Food('치킨');
chicken.addBrand('페리카나');
chicken.addBrand('교촌치킨');



pizza.print();
chicken.print();

