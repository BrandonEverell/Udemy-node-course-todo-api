const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const {ObjectID} = require('mongodb');

//Remove All
// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdandRemove

Todo.findByIdAndRemove('5a7a5540b37780e84375c36e').then((todo) => {
  console.log(todo);
})
