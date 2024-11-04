// Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


const cars = [
    { make: "Toyota", model: "Camry", year: 2019 },
    { make: "Honda", model: "Accord", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "Chevrolet", model: "Malibu", year: 2018 }
  ];
  
  // Function to sort cars by year in ascending order
  const sortCarsByYear = (carsArray) => {
    return carsArray.sort((a, b) => a.year - b.year);
  };
  
  // Get the sorted result
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars); // output -> [{ make: 'Honda', model: 'Accord', year: 2015 },{ make: 'Chevrolet', model: 'Malibu', year: 2018 },{ make: 'Toyota', model: 'Camry', year: 2019 },{ make: 'Ford', model: 'Mustang', year: 2021 } ]