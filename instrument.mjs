import * as module from "module";

console.log("instrument.mjs");

module.register("import-in-the-middle/hook.mjs", import.meta.url);
