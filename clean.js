"use strict";

const shell = require("shelljs");

const { dependencies } = require("./package");

const arrayDeps = [...Object.keys(dependencies)].map(e => e.split("/"));

shell.rm("-rf", "node_modules/*/node_modules/**/*.d.ts");
shell.rm("-rf", `node_modules/!(${arrayDeps.map(e => e[0]).join("|")})`);
