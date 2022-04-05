import { createServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';

const schema = importSchema('src/schema.graphql');
import { resolvers } from './resolvers.js';

const server = createServer({
    schema: {
        typeDefs: schema,
        resolvers: resolvers,
      },
    })

server.start(() => console.log(`Server is running on http://localhost:4000`));