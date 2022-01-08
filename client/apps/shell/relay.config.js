/** @type {import('relay-compiler/lib/bin/RelayCompilerMain').Config} */
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "../../.",
  schema: "../../schema/schema.graphql",
  language: "typescript"
};
