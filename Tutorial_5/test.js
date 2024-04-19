const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");//We import the BlogPost model by specifying its relative path
mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser: true});// connecting to the database

BlogPost.create({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when i went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past borring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. they go like this:"

}, (error, blogpost) => {
    console.log(error, blogpost)
})

