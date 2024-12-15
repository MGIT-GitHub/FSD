
// // npm install mongodb
import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        console.log('Exiting..')
        client.close()
    })
    .catch(error => console.log('Failed to connect!', error))