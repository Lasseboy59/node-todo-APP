// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
    if(err){
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c629e190a011f5bb479f804')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('User').findOneAndUpdate({
    //     name: 'Lasse'
    // },{
    //     $set: {
    //         name: 'Jen'
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('User').findOneAndUpdate({
        name: 'Jenny'
    },{
        $set: {
            name: 'Tim'
        },
        $inc: {
            age: 1
        },
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    // db.close();
});