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