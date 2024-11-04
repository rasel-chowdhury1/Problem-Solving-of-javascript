// Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Carol", age: 22 },
    { name: "David", age: 35 }
  ];
  
  // Function to find and modify a person's age by name
  const updateAgeByName = (peopleArray, personName, newAge) => {
    // Find the person by name
    const person = peopleArray.find(person => person.name === personName);
    
    // If the person is found, update their age
    if (person) {
      person.age = newAge;
    }
  };
  
  // Update the age for "Bob"
  updateAgeByName(people, "Bob", 28);
  console.log(people); //output -> [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 28 }, { name: 'Carol', age: 22 },{ name: 'David', age: 35 }]