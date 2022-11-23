module.exports = {
	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime'
		},
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
		]
	}
}
