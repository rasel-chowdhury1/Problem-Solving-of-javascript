//  Object Manipulation

//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  // Function to get an array of book titles
  const getBookTitles = (booksArray) => {
    return booksArray.map(book => book.title); // Map to array of titles
  };
  
  // Get the result
  const result = getBookTitles(books);
  console.log(result); // output -> ['To Kill a Mockingbird','1984','The Great Gatsby','Pride and Prejudice']