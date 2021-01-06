const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Jeff:Uwr0K1yCZRUbYUb3@nodejstrn.yhsnj.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err)
    });
};

module.exports = mongoConnect;
