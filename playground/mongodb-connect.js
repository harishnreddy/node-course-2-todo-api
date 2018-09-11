
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("unable to connect to mongodb");
  }

  console.log("connect to MongoDB sever");

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  db.collection('Users').insertOne({
    name: 'Harish',
    age: 33,
    location: 'Smyrna'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert into Users', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined, 2));
  });

  db.close();

});
