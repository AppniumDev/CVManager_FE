import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://cv-manager.appnium.it/v1/graphql',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'Rotfl3456!',
    },
  }),
  cache: new InMemoryCache(),
})
