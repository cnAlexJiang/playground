import { ApolloServer } from 'apollo-server-express';
import { Container } from 'typedi';
import express from 'express';
import { SchemaResolver } from './dpc/dpc.resolver';
import 'reflect-metadata';
import { buildSubgraphSchema } from './common/buildFederatedSchema';

async function bootstrap() {
  const app = express();

  const schema = await buildSubgraphSchema({
    resolvers: [SchemaResolver],
    emitSchemaFile: false,
    container: Container,
  });

  // Create the GraphQL server
  const graphqlServer = new ApolloServer({
    schema,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    playground: true,
  });

  await graphqlServer.start();
  const graphqlMiddleware = graphqlServer.getMiddleware();

  app.use(graphqlMiddleware);

  return app;
}

const app = bootstrap();

export const viteNodeApp = app;
