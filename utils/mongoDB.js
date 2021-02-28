import { MongoClient } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// if (!MONGODB_DB) {
//   throw new Error(
//     'Please define the MONGODB_DB environment variable inside .env.local'
//   )
// }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect('mongodb+srv://Shashi_1:Welcome123@cluster0.vmzqt.mongodb.net/sample_airbnb?retryWrites=true&w=majority', opts).then((client) => {
      return {
        client,
        db: client.db('Portfolio-details'),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}