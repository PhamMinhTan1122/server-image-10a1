
// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Defining port number
const PORT = process.env.PORT || 3000;

// Function to serve all static files
// inside public directory.
app.use(express.static('/server'));
app.use('/images', express.static('images'));

// Server setup
app.listen(PORT,"0.0.0.0", () => {
    console.log(`Running server on PORT ${PORT}...`);
})