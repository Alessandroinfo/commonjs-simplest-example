// Import the "greetings" and "bye" functions from the "myModule.js" module using destructuring assignment
const {greetings, bye} = require('./myModule.js');

// Call the "greetings" function from the imported module with the argument "Alessandro"
greetings('Alessandro');

// Call the "bye" function from the imported module with the argument "Alessandro"
bye('Alessandro');
