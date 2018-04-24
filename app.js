var express = require('express');
var app = express();
require('./src/utils/googleCalendar.js');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/calendar-events', function (req, res) {
    // If user is not logged in, redirect to login page, then redirect back to /calendar-events
    // else, return a list of calendar events
    res.send('Hello World!');
});

app.listen(3007, function () {
    console.log('Example app listening on port 3007!');
    console.log('http://localhost:3007/');
});
