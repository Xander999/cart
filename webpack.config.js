const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 4201,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        open: true,
        historyApiFallback: true,
        hot: true,
    },
    output:{
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module:{
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
                test: /\.svg$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartApp': './src/CartApp.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: true,
                },
            },
        }),
    ],
    
    }