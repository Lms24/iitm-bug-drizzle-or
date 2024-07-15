## Bug

`import-in-the-middle` seems to remove several top-level exports from `drizzle-orm`.

For example,

```js
import { or } from "drizzle-orm";
or();
```

will crash when registering the iitm hook as `or` becomes `undefined`. 

## How to reproduce:

1. clone repo
2. `npm install`
3. run `node index.js`:
   - observe 112 top-level exports from `drizzle-orm` (see console log)
   - script terminates successfully
1. run `node --import ./instrument.mjs  index.js`
   - observe 85 top-exports form `drizzle-orm` console log (=> 27 exports missing)
   - script crashes when calling one of the missing unctions (e.g. `drizzle.or()`)