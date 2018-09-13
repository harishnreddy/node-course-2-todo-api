const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '5b9ab61d31d117b9a38e21bf';

if (!ObjectID.isValid(todoId)) {
  console.log('ID is not valid');
} else {
  console.log('ID is valid');
}


var userId = '5b99897cacff23df9cf781d9';

User.findById(userId).then((user) => {
    if(!user) {
      return console.log('User Id not found');
    }
    console.log('user by id\n', user);
  }).catch((e) => console.log(e));

//query works but no user

var userId = '6b99897cacff23df9cf781d9';

User.findById(userId).then((user) => {
    if(!user) {
      return console.log(JSON.stringify(user, undefined, 2));
    }
    console.log('user by id\n', user);
  }).catch((e) => console.log(e));

// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo One', todo);
// });


// Todo.findById(todoId).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo by id\n', todo);
// }).catch((e) => console.log(e));
