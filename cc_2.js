// Task 1: Working with Arrays //

let products = ['Shield Cell','Phoenix Kit', 'Med Kit', 'Syringe', 'Thermite']; // Array of products

products.push('Boosted Loader'); // Add new products to the end of the array

console.log(products); // print the array of products

products.pop(); // Remove the last product from the array

console.log('Updated products:',products); // print the array of products 

// Task 2: Accesing and Modifying Arrays //
let scores = [100, 90, 85, 95, 65 ]; // Array of scores
scores[1] = 95; // Modify the second element of the array

let total = scores.reduce((a, b) => a + b, 0); // Calculate the total scores
let average = total / scores.length; // calculate the average of the scores

console.log('Updated Scores;', scores); // Print the updated array of scores
console.log(total); // Print the sum of the scores 
console.log('Average Score:', average); // Print the average of the scores

// Task 3: Working with Objects

let employee = {
    name: 'Loba',
    age: 23,
    department: 'HR',
    isActive: true
}; // object of employee

console.log(employee); // Print the object of employee

employee.department = 'Customer Service'; // Modify the department of the employee
employee.position = 'Manager'; // Add a new property to the employee

console.log(employee); // Print the object of employee

// Task 4: Array of Objects //

let customers = [
    {name: 'Loba', email: 'Loba@aol.com', purchaseAmount: 100},
    {name: 'Mad Maggie', email: 'MadMaggie@aol.com', purchaseAmount: 200 },
    {name: 'Wraith', email: 'wraith@aol.com', purchaseAmount: 300}
]; // Array of objects of customers 

console.log(customers); // print the array of objects of customers
customers.push({name: 'LifeLine', email: 'lifeline@aol.com', purchaseAmount: 400 }); // Add a new customer to the array
console.log(customers); // Print the array of objects of cusomers 

