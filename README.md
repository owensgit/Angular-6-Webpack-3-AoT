# Angular 6, Webpack 3, AoT Compilcation & Lazy Loading

This is simple project which contains a custom Webpack 3 config for Angular 6, including support for Ahead of Time Compilation (AoT) and lazy loading of Angular modules.

I've kept the versions at Angular 6 and Webpack 3 to use as reference and experiementation, for working with an older app stuck on these versions.

### Commands

Development build, doesn't implement AoT:

`npm run build:dev`

Example production build, without AoT:

`npm run build:prod`

Example production build with AoT

`npm run build:prod-aot`

All builds are created in the _./dist_ directory, but the `prod-aot` build is created in the _./dist/aot_ directory, so you can see the difference between an AoT and non-AoT build.

### Webpack Config

The config starts in _./webpack.config.js_, and is split into 3 files under _./config_:

- webpack.dev.js
- webpack.prod.js
- webpack.prod-aot.js

### Ahead of Time Compliation

AoT is implemented using the **AngularCompilerPlugin**, which is part of the **[@ngtools/webpack npm module](https://www.npmjs.com/package/@ngtools/webpack)**. This takes care of the AoT step and is only included in the _webpack.prod-aot.js_ config. This is on version `^1.10.2`, as I ran into issues running the latest version with Angular 6 and Webpack 3.