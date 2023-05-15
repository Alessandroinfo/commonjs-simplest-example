CommonJS Simplest Example
=========================

This is a simple example of how to use CommonJS modules in Node.js.

Installation and Usage
----------------------

To use this example, clone this repository and run the following command:


`npm install`

Then, you can run the `main.js` file using Node.js:


`node main.js`

This will execute the code in the `main.js` file, which imports the `greetings` and `bye` functions from the `myModule.js` module using destructuring assignment, and then calls these functions with the argument "Alessandro".

Files
-----

### `main.js`

This file imports the `greetings` and `bye` functions from the `myModule.js` module using destructuring assignment, and then calls these functions with the argument "Alessandro".

### `myModule.js`

This file defines two functions: `greetings` and `bye`. The `greetings` function outputs a greeting message to the console that includes the message passed as an argument, while the `bye` function outputs a farewell message to the console that also includes the message passed as an argument. These functions are then exported as properties of an object using the `module.exports` statement.

### `package.json`

This file specifies the name, version, description, entry point, scripts, author, and license of the example project. The `serve` script runs a local HTTP server for development purposes.

Run
-----
Run with `node src/main.js`
