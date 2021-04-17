// Dependencies
const fs = require('fs'); //* allows you to access the filesystem
const path = require('path'); //* allows you to access info about the path where process run *create paths *interact with the paths
const express = require('express');
const uniqid = require('uniqid'); //*node module that creates a unique id method

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

// Post api/notes
app.post('/api/notes', (req, res) => {

    let newnote = req.body
    // console.log(newnote);
    newnote.id = uniqid('note-');
    // console.log(newnote);
    // define readfile funtion
    fs.readFile(datapath, 'utf8', (err, data) => {
        if (err) throw err;

        let dataset = JSON.parse(data);
        dataset.push(newnote);

        fs.writeFile(datapath, JSON.stringify(dataset), (err) => {
            if (err) throw err;
            res.json(newnote)//*due to how the index.js is written - it doesn't matter whats in the response as long as it's truthy and returns a 200 status code
        });
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
