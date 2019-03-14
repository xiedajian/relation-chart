const path = require('path');

module.exports = {
    entry: {
        'index':'./src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
