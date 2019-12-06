const root = require('app-root-path').path
const dotenv = require('dotenv').config({ path: `${root}/.env` });
const DefinePlugin = require('webpack').DefinePlugin

module.exports = {
    entry: `./index.js`,
    target: 'node',
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'index.js',
        path: `${root}/dist`,
        libraryTarget: "commonjs"
    },
    plugins: [
        new DefinePlugin({
            "process.env": dotenv.parsed
        })
    ]
}