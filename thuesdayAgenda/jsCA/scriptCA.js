// Array
let fruits = ["äpple", "banan", "kiwi"];
console.log(fruits[0]); // första
console.log(fruits[fruits.length - 1]); // sista

// Objekt
let person = { name: "Anna", age: 25, city: "Göteborg" };
console.log(`${person.name} är ${person.age} år och bor i ${person.city}.`);

// If-sats
if (person.age >= 18) {
  console.log("myndig");
} else {
  console.log("omyndig");
}

// Eventuellt: Visa tydligt skillnaden på == vs === eller %-operatorn.
