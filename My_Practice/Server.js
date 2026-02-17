const http = require('http');
const user = {
    name: "Dushyant Sharma",
    age: 18
};

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;    
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


