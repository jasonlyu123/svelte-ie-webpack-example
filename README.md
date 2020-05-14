# svelte-ie-webpack-example 
Wepack config example of polyfill and transpile needed for svelte to support IE 11

## polyfill: 
1. [core-js](https://github.com/zloirock/core-js)
2. [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)
3. custom element polyfill, for example: [@webcomponents/custom-elements](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements)

## transpile
1. setup [babel](https://babeljs.io/setup) and babel-loader (webpack)
2. setup babel-loader to exclude node_module but include svelte
   1. if you're using windows, the regex needed to be windows-style(`\`). 
   2. The `test` property of babel-loader must be changed to include `.mjs` (`/\.m?js$/`) because svelte's runtime use `.mjs` extension.
   3. don't tranpile `core-js`. if you tranpile it, polyfill won't work.
3. setup babel-loader to transpile svelte file. Noted in the `use` property `svelte-loader` must be after `babel-loader`, 
  so that `svelte-loader` would execute first
