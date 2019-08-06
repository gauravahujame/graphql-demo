import graphqlHTTP from 'express-graphql';
import express from 'express';
import schema from './src/schema';
import resolvers from './src/resolvers';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');