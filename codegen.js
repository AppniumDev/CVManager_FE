module.exports = {
  schema: [
    {
      'https://cv-manager.appnium.it/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'Rotfl3456!',
        },
      },
    },
  ],
  documents: ['./src/graphql/mutations/*.tsx', './src/graphql/queries/*.tsx'],
  overwrite: true,
  generates: {
    './generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3,
        // documentMode: 'external',
        // apolloClientInstanceImport: './controllers/utils/apolloClient.tsx',
      },
      // preset: 'import-types',
      // presetConfig: {
      //   typesPath: './generated/graphql.tsx',
      // },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
