// const app = require("express")();

// const host = 'localhost'; //134.249.68.62 localhost
// const port = 20163;

// app.get('/', (req, res) => {
//     console.log(req);
//     console.log(res);
// });

// app.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


// const http = require('http');

// const host = 'localhost'; //134.249.68.62 localhost
// const port = 20163;

// const server = http.createServer((socket) => {
//     console.log('GSM is connected!');
//     socket.on('data', data => {
//         console.log(data);
//     });
// });

// server.listen(port, host);

var XMLHttpRequest = require('xhr2');

var xhr = new XMLHttpRequest();
xhr.open('GET', '134.249.68.62:20163');
xhr.send()
xhr.onload = (DATA) => {
    console.log(DATA);
    console.log(xhr.response);
}

