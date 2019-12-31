function print(person) {
  if (!person) {
    // if (person === undefined || person === null) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John"
};

print();

console.log("falsy한 값");
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
console.log(!false);

const value = { a: 1 };
if (value) {
  console.log("value 가 Truthy 하네요.");
}

const value2 = { a: 1 };
const truthy = value2 ? true : false;
//const value = { a: 1 };
//const truthy = !!value;
