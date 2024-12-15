
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('MYDB').collection('students')
    .updateOne({ name: 'cse1' },
        {
            $set:
                { email: 'cse123@example.com' }
        })
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))