const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const config = require('./src/config');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const context = require('./src/context');

const { database, port } = config;

console.log(config);

async function startServer() {
  const app = express();

  await mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB');
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen({ port }, () => console.log('server is UP'));
}

setImmediate(startServer);
