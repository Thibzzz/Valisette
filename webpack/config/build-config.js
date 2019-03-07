const productionMode = process.env.NODE_ENV === 'prod' ? true : false;
const critical = process.env.CRITICAL ? true : false;
const buildConfig = {
  productionMode,
  pwaMode: true, // Turn your app into a Progressive Web App
  appShellMode: true,
  verbose : false,
  audit : false,
  appUrl: "https://valisette.dev",
  logLevel: "error",
  publicPath: '/public/', // Public assets folder path
  publicManifestPath: '/', // Public assets folder path
  jsPath: 'javascript/', // Javascript folder name
  tsPath: 'typescript/', // Typescript folder name
  cssPath: 'css/', // Css folder name
  imagesPath: 'images/',
  fontsPath: 'images/',
  assetsPath: 'resources/assets/', // Assets source location
  watch: process.env.WATCH ? process.env.WATCH : false,
  jsMain: [
    'main.js',
  ], // Main JS file to import / require from
  jsMainOutput: '[name].js', // js file output name pattern
  jsWorker: 'worker.js', // Declares your service worker(s)
  stylesMain: 'styles.js', // Manages lazy loading
  scssPath: 'scss/', // scss source folder
  scssMain: [
    'main.scss',
  ], // Main scss file
  cssMainOutput: '[name].css', // css file output name pattern (used in production mode)
  devtool: productionMode ? '(none)' : 'eval-source-map ', // Sourcemap type declaration
  critical,
  pwa: {
    appName: 'Valisette by Thibzzz',
    shortAppName: 'Valisette',
    appDescription: 'Valisette :  : a boilerplate for valet & vue users by Thibzzz. https://github.com/thibzzz',
    appColor: '#3a74a5',
    themeColor: '#3a74a5',
    appLogo: 'public/valisette-logo.png'
  },
  browserSync: { // This implies that you are hosting your code on your machine but you can always set browserSync options -> https://github.com/Va1/browser-sync-webpack-plugin
    target: "https://valisette.dev"
  },
  performance: {
    compressionTreshold: 10240 // Minimum chunk size to set compression flag (performs better at 10240 on mobile in our experience)
  }
};
export {
  buildConfig
};
