// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({
        description: "Clean the house",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

// // In connect:
// db.collection("users").insertOne(
//   {
//     name: "Anushka",
//     age: 20,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }

//     console.log(result.acknowledged);
//   }
// );

// db.collection("users").insertOne(
//   {
//     _id: id,
//     name: "Serena",
//     age: 22,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }

//     console.log(result.acknowledged);
//   }
// );

// db.collection("users").insertMany(
//   [
//     {
//       name: "Jen",
//       age: 28,
//     },
//     {
//       name: "Blair",
//       age: 23,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents");
//     }

//     console.log(result.acknowledged);
//   }
// );

// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Clean the house",
//       completed: true,
//     },
//     {
//       description: "Renew inspection",
//       completed: false,
//     },
//     {
//       description: "Put plants",
//       completed: false,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks");
//     }

//     console.log(result.acknowledged);
//   }
// );

// db.collection("users").findOne({ name: "Jen" }, (error, user) => {
//   if (error) {
//     return console.log("Unable to fetch");
//   }

// db.collection("users").findOne(
//   { _id: new ObjectID("630518385f56c24a6fa784f7") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to fetch");
//     }

//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ age: 20 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

// db.collection("tasks").findOne(
//   { _id: new ObjectID("6305153b3c86ed1fca73c489") },
//   (error, user) => {
//     console.log(user);
//   }

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     console.log(tasks);
//   });

//   db.collection("users")
//     .updateOne(
//       {
//         _id: new ObjectID("6301efd7befb3725258c3c09"),
//       },
//       // {
//       //   $set: {
//       //     name: "Beck",
//       //   },
//       {
//         $inc: {
//           age: 1,
//         },
//       }
//     )
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// db.collection("tasks")
//   .updateMany(
//     {
//       completed: false,
//     },
//     {
//       $set: {
//         completed: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result.modifiedCount);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("users")
//   .deleteMany({
//     age: 20,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
