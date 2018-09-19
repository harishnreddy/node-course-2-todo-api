var express = require('express');
var bodyParser = require('body-parser');


var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  //console.log(req);

  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

//  console.log("hello");
//  console.log(req.body);
});


app.delete('/todos/:id', (req, res) => {


  var id = req.params.id;

  //validate id - 404
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    } else {
      res.send({todo});
    }
  }).catch((e) => {
    res.status(400).send();
  });

});

app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });


});




// GET /todos/12345

app.get('/todos/:id', (req,res) => {
  //res.send(req.params);

  var id = req.params.id;

  //validate id - 404
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  //id = '6b99897cacff23df9cf781d9';

  Todo.findById(id).then((todo) => {
    if (!todo) {
      console.log("have No user");
      res.status(404).send();
    } else {
      res.send({todo});
    }
  }).catch((e) => {
    res.status(400).send();
  });

});



app.listen(port, () => {
  console.log(`Started on ${port}`);
})

module.exports = {app};
