// dependencies
const fs = require('fs');
const path = require('path');
const express = require('express');

// express config
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// router
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


//get api/notes //access info from db


//post api/notes //push new notes


//**Bonus: delete api/notes //delete notes (on delete button)





// listener
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
})

//TODO: come back and delete api route

// start server
