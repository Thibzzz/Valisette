# Jockpack

A webpack 3 build system meant to work with various JS technologies seamlessly.


## Features

[X] Browsersync dev server / proxy

[X] Service worker generator
[X] Critical CSS generator
[X] PWA manifest generator
[X] App cache generator
[X] Sourcemaps generator

[X] ES5 (IE11) backward compatibility transpiler
[X] ES6 - ES7+ transpiler
[X] VueJS components transpiler
[X] Code splitting
[X] Tree shaking
[X] Comments removal

[X] SASS (SCSS) compiler
[X] Components styles extraction
[X] CSS prefixing

[X] CSS minifier
[X] JS Minifier
[X] Image minifier

## Get started

To use Jockpack one must have a proper node.js configuration setup on it's local machine.

*Warning : Jockpack is not meant to be used server side as it's a build system setup. It contains numerous pieces of software that are vulnerabilities if used as such.*

You can either go to [Node's website](https://nodejs.org/en/) or use Node version manager better known as NVM which can be installed using [this script](https://github.com/creationix/nvm#install-script).

If you use Node as a stand alone make sure you export node & npm to your path's so it can be called from your project directory.

If you use NVM you wanna use 

```
nvm ls-remote
```

This command will list all node's version available for installation. From there you must pick the "LTS" one which means "Long Term Support (schedule)". This is de facto the most stable version you can use at any point in NodeJS development.

## Install Jockpack

Clone this repo somewhere on your machine and merge any existing file so Jockpack's version prevails

```
git clone git@gitlab.16pixels.fr:open-source/Jockpack.git .
```

## Jockpack Configuration

As a build tool, Jockpack abstracts many redundants tasks and allows you to solely rely on a single configuration file.

This file is ```webpack/config/build-config.js``` which is shown below, we'll review each feature afterwards.

```
// webpack/config/build-config.js
const isProduction = process.env.NODE_ENV === 'prod' ? true : false;
const critical = process.env.CRITICAL ? true : false;
const buildConfig = {
  isProduction,
  production: isProduction,
  publicPath: '/public/', // Public assets directory path
  publicManifestPath: '/', // Public assets directory path
  jsPath: 'javascript/', // Javascript directory name
  tsPath: 'typescript/', // Typescript directory name
  cssPath: 'css/', // Css directory name
  assetsPath: 'resources/assets/', // Assets source location
  watch: process.env.WATCH ? process.env.WATCH : false,
  jsMain: 'main.js', // Main JS file to import / require from
  jsMainOutput: '[name].js', // Main JS file to import / require from
  jsWorker: 'worker.js', // Declares your service worker(s)
  stylesMain: 'styles.js', // Manages lazy loading
  scssPath: 'scss/', // scss source directory
  scssMain: 'main.scss', // Main scss file
  cssMain: 'main.css', // Main css file (used in production mode)
  cssMainOutput: '[name].css', // Main css file (used in production mode)
  devtool: isProduction ? '(none)' : 'eval-source-map ', // Sourcemap type declaration
  isPwa: false, // Turn your app into a Progressive Web App
  critical,
  pwa: { // If isPwa is true, those parameters will configure your App manifest for you
    appName: 'Jockpack',
    shortAppName: 'Jockpack',
    appDescription: 'Jockpack',
    appColor: '#3a74a5',
    themeColor: '#3a74a5',
    appLogo: 'public/favicon.ico'
  },
  browserSync: { // This implies that you are hosting your code on your machine but you can always set browserSync options -> https://github.com/Va1/browser-sync-webpack-plugin
    host: 'localhost',
    port: 3000,
    proxy: false, // If you type an url here ex : 'http://mydevelopmentserver.dev' , Jockpack will not serve your code and simply proxy your dev server url
    baseDir: './public',
    index: './index.html',
    directory: true,
  },
  performance: {
    compressionTreshold: 0 // Minimum chunk size to set compression flag (performs better at 10240 on mobile in our experience)
  }
};
export {
  buildConfig
};

```

## Commands 

```
"start"
"build"
"watch"
"prod"
"ie"
"critical"
"imgmin"
```

### Start

Clean your project, install dependencies & compiles your code

### Build

Build your code without minifying it. Then outputs it to your public directory.

### Watch

Starts your Browsersync service & builds your code (with build command) everytime you edit files in ```resources/assets/javascript``` or in ```resources/assets/scss```.

### Prod

Build your code, minifies it and gzips it. Then outputs it to your public directory.

### IE

Makes your Javascript compatible on IE11

### Critical

Generates your critical CSS and outputs it to file in public directory.

### Imgmin

Minifies all your JPEG JPG PNG images and outputs them to a directory called "images" in your public directory.


