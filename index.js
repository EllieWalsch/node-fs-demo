// ESM - ecma script modules

// only import part of module that we're interested in
// "promises" is a specific name in the object
// we can rename promises to fs using "AS" to make things easier

import { promises as fs } from "fs";

// TODO: read the file, then write the file to a new file

// reads our users.json file
const data = await fs.readFile("users.json", "utf-8");

// copies data into a new file
// run node index.js and the ls
// new file is added with same data
await fs.writeFile("users-copy.json", data);

console.log(data);
