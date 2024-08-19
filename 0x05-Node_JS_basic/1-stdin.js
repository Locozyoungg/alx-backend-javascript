// 1-stdin.js

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for input from stdin
process.stdin.on('data', (data) => {
    // Trim any extra whitespace/newlines from the input
    const name = data.toString().trim();
    
    // Display the input name
    console.log(`Your name is: ${name}`);
    
    // End the process
    process.exit();
});

// Handle process exit event
process.on('exit', () => {
    console.log("This important software is now closing");
});
