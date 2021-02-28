// import { MongoClient } from 'mongodb';
// import nextConnect from 'next-connect';

// const client = new MongoClient('mongodb+srv://Shashi_1:Welcome123@cluster0.vmzqt.mongodb.net/sample_airbnb?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function database(req, res, next) {
//   if (!client.isConnected()) await client.connect();
//   req.dbClient = client;
//   req.db = client.db('Shashi-portfolio');
//   return next();
// }

// const middleware = nextConnect();

// middleware.use(database);

// export default middleware;