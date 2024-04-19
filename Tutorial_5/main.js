const express = require("express"); //importing the express module
const path = require("path");// helps us get the specific path to the file
const app = express();// calls express function to start a new app
const ejs = require("ejs");
app.set("view engine", "ejs");// telling express to use EJS as our templating engine
app.use(express.static("public"));// app.use is a special function to increase functionality with express by adding a function to our application

// Handling Request with express
/*app.get("/", (req, res) => {
    res.json({
        name: "Greg Lim"
    })
})*/

// Responding with html files with express/ using ejs
app.get('/', (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    //res.sendFile(path.resolve(__dirname, "pages/about.html"));
    res.render("about");
})
                                
app.get("/contact", (req, res) => {
    //res.sendFile(path.resolve(__dirname, "pages/contact.html"));
    res.render("contact");
})

app.get("/post", (req, res) => {
    //res.sendFile(path.resolve(__dirname, "pages/post.html"));
    res.render("post");
})

//Serving Static Files with Express


app.listen(3000, () => {
    console.log("App listening on port 3000");
})