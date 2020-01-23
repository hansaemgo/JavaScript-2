// 객체 생성자 (보통 대문자로 시작)

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function() {
    //     console.log(this.sound);
    // }
}
    // function say 프로토타입 만들기 - 값을 재사용 할 수 있다.
    Animal.prototype.say = function() {
        console.log(this.sound);
    }
    Animal.prototype.sharedValue = 1;


//객체 만들기 (new 객체생성자 이름(함수호출)
const dog = new Animal('개', '멍멍이', '멍!멍!'); 
const cat = new Animal('고양이', '야옹이', '야~옹');

dog.say();
cat.say();
console.log(dog.sharedValue);
console.log(cat.sharedValue);




/*============================= 객체 생성자 상속받기 ======================================*/

function Animal2(type, name, sound) {    // Animal 객체 생성자 만들고 
    this.type = type;
    this.name = name;
    this.sound = sound;
};

Animal2.prototype.say = function() {          // 프로토타입.say 함수를 만들어서 넣어주고 
    console.log(this.sound);
}

function Dog2(name, sound) {                 // Dog2 와 Cat2 라는 객체셍성자를 만들어서
    Animal2.call(this, '개', name, sound);   // call의 파라미터(1) 이 객체 생성자 함수에서의 This
}

function Cat2(name, sound) {
    Animal2.call(this, '고양이', name, sound);
}

Dog2.prototype = Animal2.prototype;          // 프로토타입 공유 
Cat2.prototype = Animal2.prototype;

const dog2 = new Dog2('멍멍이', '멍멍');
const cat2 = new Cat2('야옹이', '야옹');


dog2.say();
cat2.say();



