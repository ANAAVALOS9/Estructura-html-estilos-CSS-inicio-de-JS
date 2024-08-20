const path = require('path');

module.exports={
mode: 'development',
    entry:'./src/index.js', 
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static:{
            directory:path.resolve(__dirname,'dist')
        }, 
        compress: true,
        port: 9000,
    }
}