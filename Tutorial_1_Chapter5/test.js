const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");//We import the BlogPost model by specifying its relative path
mongoose.connect("mongodb://127.0.0.1/my_database", {useNewUrlParser: true});// connecting to the database

BlogPost.create({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when i went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past borring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. they go like this:"

}, (error, blogpost) => {
    console.log(error, blogpost)
})

//To select all documents in BlogPosts collection: pass an empty document as query filter parameter to the first argument of the find method
/*BlogPost.find({}, (error, blogpost) => {
    console.log(error, blogpost)
})

//to find all documents in BlogPosts collection with a particular title for e.g.
BlogPost.find({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills"
}, (error, blogpost) => {
    console.log(error, blogpost)
})

//Or

/*BlogPost.find({
    tilte:/The/}, (error, blogpost) => {
        console.log(error, blogpost)
    }
})*/
