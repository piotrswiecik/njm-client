
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schemas/*.graphql",
  documents: "src/graphql/queries/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false
      },
      config: {
        defaultScalarType: "unknown",
        useTypeImports: true,
        enumsAsTypes: true,
        skipTypename: true,
        documentMode: "string"
      }
    }
  }
};

export default config;
