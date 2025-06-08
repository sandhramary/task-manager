const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const client = new MongoClient(connectionUrl);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(databaseName);

  //////////////////////// DELETE ////////////////////////////////////

  // db.collection("tasks")
  //   .deleteOne({
  //     description: "Task 1",
  //   })
  //   .then((res) => {
  //     console.log("success", res.deletedCount);
  //   })
  //   .catch((error) => {
  //     console.error("Error deleting document:", error);
  //   });

  //   db.collection("users")
  //     .deleteMany({
  //       age: 21,
  //     })
  //     .then((res) => {
  //       console.log("success", res.deletedCount);
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting documents:", error);
  //     });

  //////////////////////// UPDATE ////////////////////////////////////

  //   db.collection("users")
  //     .updateOne(
  //       {
  //         _id: new ObjectId("68341baf82ca8903c677cb77"),
  //       },
  //       {
  //         $set: {
  //           name: "Mike",
  //         },
  //       }
  //     )
  //     .then((res) => console.log("success", res.upsertedId))
  //     .catch((error) => console.error("Error updating document:", error));

  //   db.collection("tasks")
  //     .updateMany(
  //       {
  //         completed: false,
  //       },
  //       {
  //         $set: {
  //           completed: true,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("success", res.modifiedCount);
  //     })
  //     .catch((error) => console.error("Error updating document:", error));

  /////////////////////////// READ ////////////////////////////////////

  //   db.collection("users")
  //     .find({
  //       age: 21,
  //     })
  //     .toArray()
  //     .then((users) => {
  //       console.log("Users found:", users);
  //     })
  //     .catch((error) => {
  //       console.error("Error finding users:", error);
  //     });

  //   db.collection("users")
  //     .findOne({ _id: new ObjectId("6834104aafc9a7401b8c0c70") })
  //     .then((user) => {
  //       if (!user) {
  //         console.log("User not found");
  //       } else {
  //         console.log("User found:", user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error finding user:", error);
  //     });

  //////////////////////////////////// CREATE ////////////////////////////////////

  //   db.collection("tasks")
  //     .insertMany([
  //       {
  //         description: "Task 1",
  //         completed: false,
  //       },
  //       {
  //         description: "Task 2",
  //         completed: true,
  //       },
  //     ])
  //     .then((res) => {
  //       console.log("success", res.insertedIds);
  //     })
  //     .catch((error) => {
  //       console.error("Error inserting document:", error);
  //     });

  //   db.collection("tasks")
  //     .insertMany([
  //       {
  //         description: "Task 1",
  //         completed: false,
  //       },
  //       {
  //         description: "Task 2",
  //         completed: true,
  //       },
  //     ])
  //     .then((res) => {
  //       console.log("success", res.insertedIds);
  //     })
  //     .catch((error) => {
  //       console.error("Error inserting document:", error);
  //     });

  //   db.collection("users")
  //     .insertOne({
  //       _id: oId,
  //       name: "Matt",
  //       age: 21,
  //     })
  //     .then((res) => console.log("success", res.insertedId))
  //     .catch((error) => console.error("Error inserting document:", error));
}

main();
