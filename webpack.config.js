const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Webpack mode
  mode: 'production',

  // Entry point file
  entry: './src/index.js',

  // Output file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].chunk.js', // Cambiar el nombre del archivo de salida del chunk principal
    publicPath: '/',
  },

  // Modules and rules to compile and load files
  module: {
    rules: [
      // Rule to compile SCSS files
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },

      // Rule to optimize SVG files
      // {
      //   loader: 'svgo-loader',
      //   options: {
      //     plugins: [
      //       { removeTitle: true },
      //       { convertColors: { shorthex: false } },
      //       { convertPathData: false },
      //     ],
      //   },
      // },

      // Rule to compile ES6 JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Rule to load image files
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },

      // Rule to load font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  // Plugins to generate HTML files and enable live reload
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],

  // Optimization settings
  optimization: {
    minimize: true, // Minimize code
    minimizer: [
      new TerserPlugin({
        parallel: true, // Enable parallel processing
        terserOptions: {
          ecma: 5, // Use ECMAScript 5
          compress: {
            comparisons: false, // Disable comparisons
            inline: 2, // Inline functions with 2 or fewer parameters
            drop_console: true, // Remove console.* statements
          },
          output: {
            comments: false, // Remove comments
            beautify: false, // Disable beautification
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        // Split vendors into a separate chunk
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  // Development server settings
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
