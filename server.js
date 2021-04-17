// Dependencies
const fs = require('fs'); //* allows you to access the filesystem
const path = require('path'); //* allows you to access info about the path where process run *create paths *interact with the paths
const express = require('express');

const datapath = './db/db.json';

// Express config
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); //*parse url-encoded bodies //*handles strings and arrays
app.use(express.json()); //*replaces the need to use the body-parser package //*handles objects
app.use(express.static('public')); //*handles making 'get' routes for all the files in the static public folder

// Router
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html'))); //*automatic
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


// Get api/notes //access info from db
app.get('/api/notes', (req, res) => {

    fs.readFile(datapath, 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    });
});

//**Bonus: delete api/notes //delete notes (on delete button)

//app.delete
    //readfile function
    //parse data

    //delete object by id from array
    //use splice //filter (es6) - makes new array with everything - returns a conditional



// listener // start server
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});
