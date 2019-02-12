// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
    if(err){
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c6286e10a011f5bb479f52f')
    // }).toArray().then((doc) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc, undefined, 2))
    // }, (err)=> {
    //     console.log('Unable to fetch document');
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err)=> {
    //     console.log('Unable to fetch document');
    // })


    db.collection('User').find({name: 'Tim'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err)=> {
        console.log('Unable to fetch document');
    })

    db.collection('User').find({name: 'Tim'}).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err)=> {
        console.log('Unable to fetch document');
    })

    // db.close();
});