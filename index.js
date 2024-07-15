import * as drizzle from "drizzle-orm";

console.log("index.js");
console.log("esm mode:", typeof require === "undefined");

// with IITM: 85 keys
// without IITM: 112 keys
console.log(`drizzle has ${Object.keys(drizzle).length} keys`);

console.log("drizzle.or", typeof drizzle.or);
drizzle.or();
