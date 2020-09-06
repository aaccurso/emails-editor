const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
