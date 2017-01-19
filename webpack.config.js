module.exports = {
    entry: "./src/js/script.js",
    output: {
        path: './public',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                 loader: "html",
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
              test: /\.html$/,
              loader: 'html'
            }
        ]
    },
    resolve: {
      alias: {
         handlebars: 'handlebars/dist/handlebars.min.js'
      }
  },
  // watch: true,
  // devtool: "source-map"
};