const mongodb = require('mongodb');

const mongoClient = mongodb.mongoClient;

const Mongo_Url = "mongodb+srv://harrymiller7455:root123@completecoding.5khpm.mongodb.net/?retryWrites=true&w=majority&appName=completecoding";

let  _db ;

const mongoConnect = (Callback) => {
  mongoClient.connect(Mongo_Url)
  .then (client =>{
  _db = client.db('airbnb'); 
  Callback();
})
.catch((err)=>{
  console.log( err);
  throw err;
});
};

const getDB =() => {
  if(!_db){
    throw new Error('mongodb is not connected');
  }
}
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;