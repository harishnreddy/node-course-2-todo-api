const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("unable to connect to mongodb");
  }

  console.log("connect to MongoDB sever");

  //delete many



  //delete one
  //find one and delete

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch users', err);
  // });

//  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//    console.log(result);
//  });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

    //look for dups - deleteMany

    //find one and delete

//    db.collection('Users').deleteMany({name : 'Harish'});


//    "5b97e4c95859b48f5231a861"

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5b97e4c95859b48f5231a861')
    }).then((result) => {
      console.log(result);
    });

});


  //db.close();
