const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id : '5ba270cc4ba2498ce0dca797'}).then((todo) => {

  console.log(todo);


});
