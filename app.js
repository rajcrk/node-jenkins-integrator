var express = require('express');
var http = require('http');
const fetch = require('node-fetch');
// Set up the express app
const app = express();
// get all todos
app.get('/api/v1/todos', (req, res) => {
    var toReturn;
    var resposeToSend;
    fetchAsync()
        .then(data => {
            console.log(data);
            resposeToSend = data;
        })
        .catch(reason => console.log(reason.message))


    // var data = fetchAsync();
    console.log('Data Received is ', resposeToSend);
    res.send(resposeToSend);
});

async function fetchAsync() {
    var sentiment = await fetch('http://localhost:8080/job/print_hello_world/build?token=raj', { method: 'POST' });
    console.log("----------------Response-----------------");
    console.log(sentiment);
    console.log("----------------Response-----------------");

    const data = await sentiment.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
}


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);

});