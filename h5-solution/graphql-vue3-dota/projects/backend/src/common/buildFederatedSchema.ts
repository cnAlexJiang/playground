import { specifiedDirectives } from 'graphql';
import {
  buildSubgraphSchema as buildApolloSubgraphSchema,
  printSubgraphSchema,
} from '@apollo/subgraph';
import { knownSubgraphDirectives as subgraphDirectives } from '@apollo/subgraph/dist/directives';
import gql from 'graphql-tag';
import type { GraphQLResolverMap } from 'apollo-graphql';
import { addResolversToSchema } from 'apollo-graphql';
import type { BuildSchemaOptions } from 'type-graphql';
import { buildSchemaSync, createResolversMap } from 'type-graphql';

export function buildSubgraphSchema(
  options: Omit<BuildSchemaOptions, 'skipCheck'>,
  referenceResolvers?: GraphQLResolverMap<any>,
) {
  const schema = buildSchemaSync({
    ...options,
    directives: [...specifiedDirectives, ...subgraphDirectives, ...(options.directives || [])],
    skipCheck: true,
  });

  const federatedSchema = buildApolloSubgraphSchema({
    typeDefs: gql(printSubgraphSchema(schema)),
    resolvers: createResolversMap(schema) as any,
  });

  if (referenceResolvers)
    addResolversToSchema(federatedSchema, referenceResolvers);

  return federatedSchema;
}
