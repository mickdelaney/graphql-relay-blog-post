/** @type {import('relay-compiler/lib/bin/RelayCompilerMain').Config} */
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: ".",
  schema: "./schema/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**", "**/dist/**"],
  language: "typescript"
};
