const http = require('http');

function requestListener(req, res) {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<html><head><title>Myntra</title><style>nav ul {list-style: none; padding: 0; margin: 0; display: flex; background-color: #333;} nav ul li {margin-right: 15px;} nav ul li a {color: white; text-decoration: none; padding: 10px;} nav ul li a:hover {background-color: #575757; border-radius: 5px;}</style></head><body><nav><ul><li><a href="/Home">Home</a></li><li><a href="/Men">Men</a></li><li><a href="/Women">Women</a></li><li><a href="/Kids">Kids</a></li><li><a href="/Cart">Cart</a></li></ul></nav></body></html>');
        res.end();
    } else if (req.url === "/Home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is the Home Page</h1>");
        res.end();
    } else if (req.url === "/Men") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is the Men Section</h1>");
        res.end();
    } else if (req.url === "/Women") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is the Women Section</h1>");
        res.end();
    } else if (req.url === "/Kids") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is the Kids Section</h1>");
        res.end();
    } else if (req.url === "/Cart") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is the Cart</h1>");
        res.end();
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>404 - Page Not Found</h1>");
        res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(3006, () => {
    console.log("Server is running on http://localhost:3006");
});

server.on('error', (err) => {
    console.error("Error occurred:", err);
});