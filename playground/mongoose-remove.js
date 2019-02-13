 const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findOneAndRemove({_id: '5c641960505f5e284482a598'}).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});

// Todo.findByIdAndRemove('5c6419221a3bcad24327d738').then((todo ) => {
//     console.log(JSON.stringify(todo, undefined, 2));
// });