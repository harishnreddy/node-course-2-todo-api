
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("unable to connect to mongodb");
  }

  console.log("connect to MongoDB sever");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b980e2f4ba2498ce0dbe303')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name : 'Harish'}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch users', err);
  });


});

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

  // db.collection('Users').insertOne({
  //   name: 'Harish',
  //   age: 33,
  //   location: 'Smyrna'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert into Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined, 2));
  // });

  //db.close();
