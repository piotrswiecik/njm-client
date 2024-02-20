
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/*.graphql",
  documents: "src/graphql/*.graphql",
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
