// 5-http.js
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Set the response header to plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (parsedUrl.pathname === '/') {
        // Handle root path "/"
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        // Handle "/students" path
        res.write('This is the list of our students\n');
        
        // Get the database file from the command line arguments
        const database = process.argv[2];

        if (database) {
            countStudents(database)
                .then(() => {
                    res.end(); // End the response once data is written
                })
                .catch((error) => {
                    res.end(error.message);
                });
        } else {
            res.end('Cannot load the database');
        }
    } else {
        // Handle any other path
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
