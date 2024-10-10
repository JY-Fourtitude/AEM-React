// const path = require('path');

// module.exports = {
//   entry: './src/main/content/jcr_root/apps/myproject2/clientlibs/clientlib-react/js/app.js',
//   output: {
//     filename: 'app.bundle.js',
//     path: path.resolve(__dirname, 'src/main/content/jcr_root/apps/myproject2/clientlibs/clientlib-react/js')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     modules: [path.resolve(__dirname, 'node_modules')]
//   },
//   mode: 'development'
// };

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main/content/jcr_root/apps/myproject2/clientlibs/clientlib-react/js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src/main/content/jcr_root/apps/myproject2/clientlibs/clientlib-react/js'),
    publicPath: '/etc.clientlibs/myproject2/clientlibs/clientlib-react/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/etc.clientlibs/myproject2/clientlibs/clientlib-react/assets/img'
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
              publicPath: '/etc.clientlibs/myproject2/clientlibs/clientlib-react/assets/fonts/'
            }
          }
        ]
      }
      
    ]
  },
  
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  mode: 'development'
};