const express = require('express');

const app = express();

// app.use('/test', (req, res) => {
//     res.send("Hello from the test");
// })

app.get('/user', (req, res) => {
    res.send({
        firstName: "SHivang",
        lastName: "Kumar"
    })
})

app.post('/user', (req, res) => {
    res.send("Data has added to DB successfully!")
})

app.delete('/user', (req, res) => {
    res.send("Data has deleted sucessfully");
})


app.use('/', (req, res) => {
    res.send("Hello from the server")
})


module.exports = {
    app
}