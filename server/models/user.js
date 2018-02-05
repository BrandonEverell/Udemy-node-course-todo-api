let mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})


// let user = new User ({
//   email: 'Brandoneverell@hotmail.com'
// });
//
// user.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save user', e)
// })

module.exports = {User};
