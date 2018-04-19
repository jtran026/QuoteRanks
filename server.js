var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name cannot be empty"]},
    quotes: [{
        quote: { type: String, required: [true, "Quote cannot be empty"]},
        vote: { type: Number, default: 0}
    }]
}, { timestamps: true });

mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author')

app.use(express.static(path.join(__dirname, './Client/dist' )));

app.get('/authors', function (req, res) {
    Author.find({}, function (err, authors) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err })
        }
        else {
            console.log("weeeeeeeeeeeeee")
            res.json({ message: "Success", data: authors })
        }
    })
})

app.post('/author', function (req, res) {
    console.log("POST DATA");
    var author = new Author();
    author.name = req.body.name

    author.save(function (err) {

        if (err) {
            console.log("Returned error", err);

            res.json({ message: "Error", error: err })
        }
        else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a task!');
            res.json({ message: "Success", data: author })
        }
    })
})

app.delete('/authors/remove/:id', function (req, res) {
    console.log("POST DATA", req.params.id);
    Author.remove({_id: req.params.id }, function (err) {

        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err })
        }
        else { 
            console.log('successfully removed an author!');
            res.json({ message: "Success"})
        }
    })
})

app.get('/authors/:id', function (req, res) {
    console.log("POST DATA", req.params.id);
    Author.findOne({_id: req.params.id }, function (err, author) {
        if (err) {
            console.log("Returned error", err);

            res.json({ message: "Error", error: err })
        }
        else {

            res.json({ message: "Success", data: author })
        }
    })
})

app.put('/author/edit/:id', function (req, res) {
    
    Author.findOne({ _id: req.params.id }, function (err, author) {
        author.name = req.body.name;
        author.save(function (err) {
            if (err) {
                console.log("Returned error", err);
                res.json({ message: "Error", error: err })
            }
            else {
                res.json({ message: "Success", data: author })
            }
        })
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./Client/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})