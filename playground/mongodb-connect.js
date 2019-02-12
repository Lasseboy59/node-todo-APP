// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
    if(err){
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('User').insertOne({
    //     name: 'Lasse',
    //     age: 45,
    //     location: 'Vantaa'
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to connect to mongodb server');
    //     }

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    // })

    db.close();
});