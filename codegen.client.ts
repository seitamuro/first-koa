import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema/*.graphql",
  documents: ["src/client/operations/*.graphql", "src/client/operations/*.ts"],
  generates: {
    "src/client/generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
