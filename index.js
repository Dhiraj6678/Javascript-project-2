                        // Answer 1


const car = {
  make: "Toyota",
  model: "Camry",
  year: 2023
};

function displayCarInfo(car) {
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
}

displayCarInfo(car);


                         // Answer 2

const student = {
  name: "John Doe",
  age: 18,
  grade: "A",
  updateGrade: function(newGrade) {
    this.grade = newGrade;
  }
};

                          // Answer 3

function countProperties(obj) {
  let count = 0;
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      count++;
    }
  }
  return count;
}

console.log(countProperties(student));


                          // Answer 4


function hasProperty(obj, propertyName) {
  return obj.hasOwnProperty(propertyName);
}

const myObject = { name: "Alice", age: 30 };
console.log(hasProperty(myObject, "name")); // true
console.log(hasProperty(myObject, "city")); // false


                            // Answer 5


function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

const radius = 5;
const area = calculateCircleArea(radius);
console.log(`The area of the circle is: ${area}`);

                          // Answer 7


const userMap = new Map();

function addUser(name, age, email) {
  userMap.set(name, { age, email });
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    userMap.set(name, { age, email });
  } else {
    console.log(`User with name ${name} not found.`);
  }
}

function deleteUser(name) {
  if (userMap.has(name)) {
    userMap.delete(name);
  } else {
    console.log(`User with name ${name} not found.`);
  }
}

addUser("Alice", 25, "alice@example.com");
addUser("Bob", 30, "bob@example.com");

console.log(userMap.get("Alice"));

updateUser("Alice", 26, "alice.updated@example.com");

console.log(userMap.get("Alice"));

deleteUser("Bob");

console.log(userMap.has("Bob"));