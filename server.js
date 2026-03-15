
import { MongoClient , ObjectId} from "mongodb" ;
const url = "mongodb://127.0.0.1:27017"

var dbName = "mydb"

const client = new MongoClient (url)

const connectDB = async () => {
    try {
        await client.connect()
        console.log("Connected to Mongo DB 👌🟢")
    } catch (error) {
        console.error(`Error connecting to Mongo DB 👎❌|| ${error}`)
        process.exit(1)
    }
};


const db = client.db(dbName)

// db.collection("mydb").insertOne({
//     name: "MALaK",
//     age: 30,
//     email: "malak@google.com"
// }).then(() => {console.log("Done")}).catch((err) => console.error(`Err`))

// var array =[{
//     name: "adel",
//     age: 25,
//     email: "adel@google.com"
// },
// {
//     name: "mariam",
//     age: 23,
//     email: "mariam@google.com"
// },
// {
//     name: "mohamed",
//     age: 23,
//     email: "mohamed@google.com"
// }
// ]

// db.collection("mydb").insertMany(array).then((ruselt) => {console.log(ruselt.insertedCount)}).catch((err) => console.error(`Err`))
// db.collection("mydb").insertMany(array).then((ruselt) => {console.log(ruselt.insertedIds)}).catch((err) => console.error(`Err`))


// const find = await db.collection("mydb").findOne({_id: new ObjectId ("69af2672c5850f1c1c304013")})
// console.log(find)


// const find = await db.collection("mydb").find({age: 25}).limit(2).toArray()
// console.log(find)


// const find = await db.collection("mydb").find({name: "sayed"}).toArray()
// console.log(find)


// const count = await db.collection("mydb").countDocuments()
// console.log(count)


// const drop = await db.collection("mydb").drop()
// console.log(drop)


// const users = await db.collection("mydb").find().sort({age: 1}).toArray()
// console.log(users)


// const users = await db.collection("mydb").find().sort({age: -1}).toArray()
// console.log(users)


// const update = await db.collection("mydb").updateMany({age: 23}, {$set: {age: 24}})
// console.log(update.modifiedCount)


// const update = await db.collection("mydb").updateOne({_id: new ObjectId ("69af2ea8c8b6b1c870cc4b33")}, {
// $set: {name: "sayed"},
// $set: {phone: "0125768135"},
// $inc: {age: 4},
// $unset: {phone: ""},
// $rename: {email: "mail"},
// $push: {skils: ["football", "swimming"]},
// $addToSet: {age : 23},
// $pull: {skils: "football"}
// })
// console.log(update.modifiedCount)


// const find = await db.collection("mydb").find().toArray()
// console.log(find)


// const find = await db.collection("mydb").find({age: { $lte: 25 }}).toArray()
// console.log(find)


// const find = await db.collection("mydb").find({age: { $lte: 25 }}).limit(2).toArray()
// console.log(find)


// const find = await db.collection("mydb").find({age: { $type: "int" }}).toArray()
// console.log(find)


// const find = await db.collection("mydb").updateMany({} ,{
//     $set: {age : 40 },
// })
// console.log(find.modifiedCount)


// const deleateone = await db.collection("mydb").deleteOne({_id: new ObjectId ("69af286af1672debd50eb6c4")})
// console.log(deleateone.deletedCount)


// const deleteMany = await db.collection("mydb").deleteMany({})
// console.log(deleteMany.deletedCount)


// const find = await db.collection("mydb").find({$or: [{age: 25}, {name: "sayed"}]}).toArray()
// console.log(find)

// const find = await db.collection("mydb").find({$and: [{age: 25}, {name: "sayed"}]}).toArray()
// console.log(find)

// const find = await db.collection("mydb").find({age: {$gt: 25, $lt: 30}}).toArray()
// console.log(find)    


// const deleteOne = await db.collection("mydb").deleteOne({_id: new ObjectId ("69af286af1672debd50eb6c5")})
// console.log(deleteOne.deletedCount)

connectDB();
