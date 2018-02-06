const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
// let id = '5a790638a433f5a7022e3fab';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
//
// // Todo.find({
// //   _id: id
// // }).then(todos => {
// //   console.log("Todos", todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then(todo => {
// //   console.log("Todo", todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5a78d52bb8e5e9a251181360').then((user) => {
if (!user) {
  return console.log('Unable to find user');
}
console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
console.log(e);
})
