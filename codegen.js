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
  documents: ['./src/*/*/**.tsx'],
  overwrite: true,
  generates: {
    'src/graphql/__generated__/graphql.ts': {
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
        withRefetchFn: true,
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
