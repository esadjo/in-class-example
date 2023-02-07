import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

// exporting this javascript; input and output -- input is the file should look at first and output is where should put it
module.exports = {
  input: "index.js",
  output: {
    dir: "dist",
  },
  plugins: [
    copy({
      targets: [{ src: "index.html", dest: "dist" }],
    }),
    nodeResolve(),
  ],
};