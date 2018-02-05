// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// deleteMany
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  console.log(result);
})
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
//   console.log(result);
// })

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })

db.collection('Users').deleteMany({name: 'Brandon'});

db.collection('Users').findOneAndDelete({_id: new ObjectID("5a74e8e15a094e9726498303") })
.then((results) => {
  console.log(JSON.stringify(results, undefefined, 2));
})


  // db.close();
})
