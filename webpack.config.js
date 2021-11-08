const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/cliente/css/estilos.css',
    output: {
        path:path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rule:{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
    },
    plugin:[
        new htmlWebpackPlugin({
            template:'./src/cliente/index.html'
        })
    ]
}