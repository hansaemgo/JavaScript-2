## JavaScript 문법

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
  