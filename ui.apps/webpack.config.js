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

              publicPath: (url, resourcePath, context) => {
                // Custom function to determine publicPath based on the file
                // if (resourcePath.includes('testimonials')) {
                //   return `/apps/myproject2/clientlibs/clientlib-react/assets/img/testimonials/${url}`;
                // }
                // return `/apps/myproject2/clientlibs/clientlib-react/assets/img/${url}`;

                  // List of directories to check
                  const directories = ['testimonials', 'team', 'portfolio', 'clients', 'blog'];
                
                  // Check if the resource path includes any of the directories
                  const matchedDir = directories.find(dir => resourcePath.includes(dir));
                  
                  if (matchedDir) {
                    return `/apps/myproject2/clientlibs/clientlib-react/assets/img/${matchedDir}/${url}`;
                  }
                  
                  // Default path if no specific directory is matched
                  return `/apps/myproject2/clientlibs/clientlib-react/assets/img/${url}`;
              }

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