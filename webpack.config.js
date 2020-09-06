const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: false
		})
	]
};
