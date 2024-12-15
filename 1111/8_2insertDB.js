
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

client.db('MYDB').collection('students').insertOne({
    name: 'cse1',
    email: 'cse1@example.com'
})
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))