function print(person) {
 if (!person){
 // if (person === undefined || person === null) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John"
};

print();

console.log('falsy한 값')
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);


const value = ;

const truthy = !!value;


