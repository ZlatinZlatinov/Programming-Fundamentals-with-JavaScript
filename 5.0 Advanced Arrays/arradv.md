# Lecture 5: Advanced Arrays: 

## Content: 

#### Basic operations with arrays: 
 - push() method - adds an element at the end of an array 
 - pop() method - removes an element from the last position of the array
 - unshift() adds an element on the first position of the array 
 - shift() removes te first element from the array 
 (Those methods modify the array by changing its length) 

 - indexOf() looks for a value/element in the array and if there is a match it returns the position of the element, otherwise it returns -1. 
 - includes() returns true/false depending if the array includes the value/element. 

#### Manipulating Arrays: 
 - slice() method - it returns a new array, it takes two arguments (start and end index). If the given arguments are outside the range of an array's length they are equal to the first valid index of the array. If the array has length of 10 and we declare a variable to slice(3,7) it will return a new array starting with index 3 from the original array and endig at index 6 inclusive. 
 - splice() method -  we can add and remove elements from the arra at an given index, but only one at a time. 

#### Mapping and Sorting arrays: 
 - map() method - creates a new array by applying a function to every element. 
 - filter() creates a new array from elements matching predicate. Predicate is a function that returns boolean value true or false.
 - sort() - method - sorts the items of an array depending of the provided comparing function.For example it can be alphabetical or nummeric in ascending/descending order. By default .sort() sorts the values as a strings in alphabetical ascending order 

#### Locale Compare method: 
 - The localeCompare() method is used to compare any two characters without regard for the used case.
 - Its a string method so ti can be directly used on an array.
