
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('MYDB').collection('students')
    .deleteOne({ name: 'cse1' })
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))