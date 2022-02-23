const express = require('express');
const mongoose = require('mongoose');
// const { ApolloServer } = require('apollo-server-express');

async function startServer() {
  const app = express();

  await mongoose.connect('uri mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB');
  /* const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app }); */

  app.use((req, res) => res.send('Hello world'));

  app.listen({ port: 4000 }, () => console.log('server is UP'));
}

setImmediate(startServer);
