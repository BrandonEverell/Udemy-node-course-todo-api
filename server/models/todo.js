let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

// let secondTodo = new Todo({
//   text: 'Something to do'
// });
//
// secondTodo.save().then((doc) => {
//   console.log('Saved second todo', doc);
// }, (e) => {
//   console.log('Unable to save', e)
// });


module.exports = {Todo};
