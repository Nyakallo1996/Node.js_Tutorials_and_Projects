// Creating our first server
/*const http = require("http");// grabbing the package in Node.js called http,helps perform actions on the server
const server = http.createServer((req,res) => { // Creating our server using the createServer function
    if (req.url === "/about") {
        res.end("The about page");
    } else if (req.url === "/contact") {
        res.end("The contact page");
    } else if (req.url === "/") {
        res.end("The home page");
    } else {
        res.writeHead(404)
        res.end("page not found")
    }
})



server.listen(3000);// The port which our server will be listening on*/

// Responding with HTML files
const http = require("http");
const fs = require("fs");// Helps us interact with files on our server
const homePage = fs.readFileSync("index.html");// readFileSync method reads the content of each file and returns it.
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notFoundPage = fs.readFileSync("notfound.html");

const server = http.createServer((req, res) => {
    if(req.url === "/about") {
        res.end(aboutPage);
    } else if(req.url === "/contact") {
        res.end(contactPage);
    } else if(req.url === "/") {
        res.end(homePage);
    } else {
        res.writeHead(404)
        res.end(notFoundPage);
    }
})

server.listen(3000);