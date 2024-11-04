// Array Filtering and Mapping

//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Carol", age: 22, gender: "female" },
    { name: "David", age: 35, gender: "male" },
    { name: "Eve", age: 28, gender: "female" },
    { name: "Frank", age: 40, gender: "male" }
  ];
  
  // Function to filter out females and map to names
  const getMaleNames = (peopleArray) => {
    return peopleArray
      .filter(person => person.gender !== "female") // Filter out females
      .map(person => person.name);                  // Map to array of names
  };
  
  // Get the result
  const result = getMaleNames(people);
  console.log(result); //output -> [ 'Bob', 'David', 'Frank' ]