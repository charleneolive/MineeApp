
// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// build in module from node
const path = require('path');

// importing files
const routes = require('./routes');

// Define Global Variables
const app = express();
const log = console.log;
// need to locate the port
const PORT = process.env.PORT || 8080; // Step 1


// Step 2
// point whereever we are running the application
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
    useNewUrlParser: true
});

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// need to have the right configuration
app.use('/', routes);

// Step 3
//  need to check if the app is in production
// need build folder in order to put react app into own server
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));
// any order route that the user goes that is not related to the previously configured route, then keep sending them the application
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});