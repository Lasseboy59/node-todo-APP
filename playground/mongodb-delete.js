// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
    if(err){
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('User').deleteMany({name: 'Lasse'}).then((res) => {
    //     console.log(res);
    // });

    db.collection('User').findOneAndDelete({ _id: new ObjectID('5c62a3d00a011f5bb479f9b1')}).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    // db.close();
});