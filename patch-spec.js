// patch spec, add id field; because id is annoyingly always at the bottom
const fs = require("fs");
const path = require("path");
const file = path.resolve(__dirname,"node_modules/@mapbox/mapbox-gl-style-spec/dist/index.es.js");
let spec = fs.readFileSync(file).toString();
if (!/^\tid: \{\n$/.test(spec)) {
	spec = spec.replace(/\},\n\tname: \{/,'},\n\tid: {\n\t\ttype: "string",\n\t\tdoc: "An ID for the style.",\n\t\texample: "bright"\n\t},\n\tname: {');
	fs.writeFileSync(file, spec);
	console.error("Spec patched");
};
