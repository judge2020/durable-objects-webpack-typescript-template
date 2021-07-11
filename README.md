# 👷 Durable Objects Webpack & Typescript template

This template is largely to demonstrate using typescript and webpack to generate a durable object worker script.

Counter.ts typescript syntax largely lifted from this pull request https://patch-diff.githubusercontent.com/raw/cloudflare/durable-objects-rollup-esm/pull/9.


## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.17 or newer to use this template.

## Please read the [Durable Object documentation](https://developers.cloudflare.com/workers/learning/using-durable-objects) before using this template.

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (ES Modules to be specific)
- Webpack 
- Typescript
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.ts`, and the eyeball script is in `src/index.ts`.

Webpack is configured to output a bundled ES Module to `dist/index.mjs`. The reason for this repo is that you need the es module output experiment enabled in webpack.

On your first publish, you must use `wrangler publish --new-class Counter` to allow the Counter class to implement Durable Objects.
