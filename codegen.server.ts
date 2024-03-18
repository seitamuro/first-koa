import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema/*.graphql",
  generates: {
    "src/server/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-operations"],
    },
  },
};

export default config;
