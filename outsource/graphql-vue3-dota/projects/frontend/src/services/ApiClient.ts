import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client/core'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { CONFIGS } from '@/configs'

export function makeGraphQLClient() {
  // Link that batches an array of GraphQL operations into a single HTTP request
  const batchLink = new BatchHttpLink({
    uri: CONFIGS.DPC_API_URL,
    batchMax: 10, // No more than 10 operations per batch
    batchInterval: 10, // Wait no more than 10 ms after first batched operation
    credentials: 'include',
  })
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: CONFIGS.DPC_API_URL,
    credentials: 'include',
  })
  // If a query specifies `context: { single: true }` in it,
  // that query will be sent as a single separate request.
  const link = split(
    operation => operation.getContext().single,
    httpLink,
    batchLink,
  )

  // Cache implementation
  const cache = new InMemoryCache()

  const gqlClient = new ApolloClient({
    link,
    cache,
    credentials: 'include',
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  })

  return gqlClient
}

export const gqlClient = makeGraphQLClient()
