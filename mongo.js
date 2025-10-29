show dbs;
db.dropdatabase
use db_name
show collections;
db.createCollection("users")

// find
db.collection_name.find()
db.users.findOne();

//insert
db.users.insertOne({name:"raj",age:20});
db.users.insertMany([{name:"ram",age:20},{name:"shyam"}]);

//
db.users.deleteMany({age:20});
show dbs;
use MyDatabase();
db.dropDatabase();
use mern116;

show collections;
db.createCollection("users")
db.users.drop();

// find
db.students.find();
db.students.findOne({age:20})

// insert
db.students.insertOne({name:"naveen",age:22});
db.students.insertMany([{name:"naveen",age:22},{name:"jai",age:20}])

// operators
$gt,$lt,$gte,$lte,$and,$or ,eq,neq

db.students.find({age:{$gt:20}});
db.students.find({age:{$gt:18,$lt:22}});

db.students.find({$and:[{age:{$gte:21}},{batch:116}]});
db.students.find({$or:[{age:{$gte:21}},{batch:116}]});

db.students.find().sort({age:1});
db.students.find().sort({age:-1});

db.students.find().limit(3)
db.students.find().skip(3).limit(2);

// update
updateOne
db.students.updateOne({name:"gaurav"},{$set:{name:"kartik"}})
updateMany
db.students.updateMany({batch:116},{$set:{course:"MERN"}});

db.students.updateOne({age:23},{$inc:{age:1}});

// delete
db.students.deleteOne({name:"pawan"});
db.students.deleteMany({age:22});