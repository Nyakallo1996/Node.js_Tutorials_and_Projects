const express = require("express"); //importing the express module
const path = require("path");// helps us get the specific path to the file
const app = express();// calls express function to start a new app
const ejs = require("ejs");
app.use(express.static("public"));// app.use is a special function to increase functionality with express by adding a function to our application

// Handling Request with express
/*app.get("/", (req, res) => {
    res.json({
        name: "Greg Lim"
    })
})*/

// Responding with html files with express
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/about.html"));
})
                                
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/contact.html"));
})

app.get("/post", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/post.html"));
})

//Serving Static Files with Express


app.listen(3000, () => {
    console.log("App listening on port 3000");
})