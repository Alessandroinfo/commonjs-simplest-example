// Define two functions: "greetings" and "bye"
const greetings = (msg) =>{
    console.log('Greetings ' + msg);
}

const bye = (msg) =>{
    console.log('Bye ' + msg);
}

// Export the "greetings" and "bye" functions as properties of an object
module.exports = {greetings, bye};
