const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("unable to connect to mongodb");
  }

  console.log("connect to MongoDB sever");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b99513a4ba2498ce0dc1ddb')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b97e2749ccfee8f42bc95e0')
  },{
    $set: {
      name: 'harish'
    },
    $inc : {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


    // db.collection('Users').findOneAndDelete({
    //   _id: new ObjectID('5b97e4c95859b48f5231a861')
    // }).then((result) => {
    //   console.log(result);
    // });

});


  //db.close();
