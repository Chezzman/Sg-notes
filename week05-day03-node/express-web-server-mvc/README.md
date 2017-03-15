#setting up mongo

##mongod
mongod - to set up in the back ground need resetting from time to time, leave this in another tab in terminal

##mongo
mongo - in another terminal set up the db, here are some commands
  -show databases         or
  -show dbs
  -use "a database within the list"
  -show collections             this then shows the tables within the database
  -db         Shows database that you are in


  -help
  -db."collections you want to look into".find()
  - db.people.find().pretty()   this will show everyone as objects. and example for another
  -db.people.find({ name: "katie" })
  -db.people.find({ age: { $gt: 12 }}) find ages greater than 12...


  -db.people.insert({ name: "swag" , age: 69 })
  -db.people.remove({ name: "swag" })

  rows within the tables are called documents


##leahs tits and tricks
Control + R = in terminal quick find previous commands
