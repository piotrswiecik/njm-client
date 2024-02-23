
import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_API_URL,
  documents: "src/graphql/source/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generated/": {
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
