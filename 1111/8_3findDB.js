const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('MYDB').collection('students')
    .findOne({name:'abc'})
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))