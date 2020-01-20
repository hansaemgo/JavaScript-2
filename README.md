### 01. Hello Javascript!
    1. 개발자도구 -> Console탭 사용
    2. console.log는 특정내용을 출력하는 방법
       - 문자열, 숫자, 연산가능 ex) console.log(1+2+3+4);

### 02. 변수(Variable) & 상수(Constant)
    1. 변수선언(바뀔수 있는 값) : let value = 1;
    2. 상수선언(값이 고정적) : const a = 1;
    3. var 권장하지 않는다(같은 이름으로 여러번 선언 가능)
    4. 데이터타입
       - 숫자(Number)
       - 문자열(String)
       - 참/거짓(Boolean) -> ture/false
       - null(진짜없다) undefined(아직정해지지않았다)

### 03. 연산자 - 산술연산자, 대입연산자
    1. 연산자 : 프로그래밍 언어에서 특정 연산을 하도록 하는 문자.
    2. 산술연산자 : 사칙연산 작업을 하는 연산자 ( + - \* /)
        - ++가 앞으로 오느냐 뒤로 오느냐에 따라 차이점 있음 (--도 마찬가지)
    3. 대입연산자 : 특정 값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자
        - +=, -=, \*=, /=

### 04. 논리연산자
    1. ! NOT : true는 false로, false는 true로 변경
    2. && AND : 양쪽값이 둘다 ture일때 true
    3. || OR : 양쪽값 중 하나가 ture일 경우 true

### 05. 함수
    - 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능
    - 파라미터가 주어졌을때 파라미터를 처리해서 결과를 만들어준다
    - 파라미터(매개변수) : input ( 넣는 값 )
    - function 함수이름 ( 파라미터) { return 결과물} 이런 셩태로 사용
    - return 아래의 코드는 호출이 되지 않는다.
    - 문자열 조합 템플릿 리터럴 문법 사용 ` `

### 06. 화살표 함수
    - const 나 let으로 시작한다
    - function 키워드 대신에 => 화살표 구현

### 07. 객체
    - 객체 어떠한 값을 선언할때 하나의 이름에 여러종류의 값을 넣을 수 있게 해준다.
    - const dog = { name : '멍멍이', age : 2} 여기서 name, age -> key
    - 객체 선언시 {} 안의 형태 (키 : 원하는 값) 
    - key는 공백이 있으면 안되고 만약 있다면 따옴표로 감싸서 문자열로 넣어준다.
    - hero.의 중복입력 방지 -> 객체 비구조화 할당
    - ex) const {alias, name, actor} = hero
    - 파라미터 단계에서 객체 비구조화 
    - ex) function Print({alias, name, actor})


### JavaScript 문법
- 삼항연산자 Condition ? ture : false
- Truthy & Falsy
  (falsy한 값 -> Undefiend, null, 0, '', NaN)
- 파라미터 : 함수에서 받아오는 값.
- 인자 : 함수를 사용할 때 넣어주는 값.
  

###  scope : 함수를 선언하게 될 때 해당변수 또는 함수가 유효한 범위.
    - Global : 전역, 코드의 모든 범위에서 사용 가능 
    - Function : 함수형 scope, 함수 안에서 사용 가능
    - Block : if, for, switch등 특정 블록 내부에서만 사용이 가능

### hoisting : 자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식
    - 웬만하면 피해야 하는 방식 (순서 찾기 힘들고, 유지보수 안좋음)
    - var : hoisting 발생 
    - const, let: hoisting 발생과 동시에 레퍼런스 에러 표시됨.

### 비동기처리 : 작업이 끝날 때 까지 기다리지 않고 다른작업 처리 
    - 비동기적으로 처리시 흐름이 멈추지 않기 때문에 여러가지 작업을 처리할수 있고, 기다리는 과정에서 다른함수 호출 가능
    - 작업이 진행되는 동안 다른 작업 하고싶다면 비동기형태로 전환 (setTimeout)
    - callback 함수 : 함수타입의 값을 파라미터로 넘겨줘서 파라미터로 받은 함수를 특정 작업후 호출해주는 것을 의미
    - Ajax Web API요청, 파일읽기, 암호화/복호화, 작업예약

### Promise : 비동기작업을 좀더 편하게 처라할수 있도록 ES6에 도입된 기능
    - callback 지옥 탈출하기


### async / await
    -  Promise 앞에 await 붙여주면 해당 프로미스 끝나고 다음작업 수행
    -  함수에서 async 사용시 결과값으로 Promise반환
    -  aync함수에서 에러 발생시킬때는 throw사용 , 에러잡을때 try/catch사용
    -  동시의 작업을 시작하고 싶다면 Promise.all()사용
    -  Promise.race : Promise 가 먼저 성공하기 전에 가장 먼저 끝난 Promise 가 실패하면 이를 실패로 간주
