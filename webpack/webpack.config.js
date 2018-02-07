const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './index.js', // точка входа
  output: {
    path: __dirname, // путь вывода в текущую директорию
    filename: 'bundle.js'    // результирующий файл
  },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {         // какие лодеры будем использовать
                    loader: 'babel-loader',  // превращает ES6-->ES5
                    options: {
                        presets: ['env']   // настройка babel
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    devServer: {
        compress: true,
        port: 9000
    }
};