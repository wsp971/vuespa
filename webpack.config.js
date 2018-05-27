const VueLoaderPlugin = require('vue-loader/lib/plugin');

const htmlWebpackPlugin = require('html-webpack-plugin');       /**  注入js插件    参考： https://segmentfault.com/a/1190000008590102*/

const path  = require('path');


module.exports = {
	
	context : __dirname,        /*上下文路径*/
	
	mode: 'development',        /*开发模式*/
	
	entry:{                     /*入口文件*/
		'app': './src/main.js'
	},
	
	output:{                                        /*输出文件*/
		path: path.resolve(__dirname,"dist"),
		filename: "[name].bundle.js",
	},
	
	/** dev 服务器配置*/
	devServer: {
		contentBase: path.join(__dirname,'dist'),
		port:7000,                      /*服务器端口*/
		overlay: true,                  /*显示编译器错误*/
		open: true                  /*服务器将打开浏览器*/
	},
	
	resolve:{
		extensions: ['.js', '.vue', '.json'],       /*自动解析这些扩展*/
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			// 'vue': 'vue/dist/vue.js'
			// '@': resolve('src'),
		}
	},
	module:{
		rules:[
			
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: ["node_modules"]
			},
			
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		// vue 插件工作的基础！
		new VueLoaderPlugin(),
		
		/** 注入 js 插件
		 * 在dev 下所有文件都是在内存中。所以看不到生成的文件。
		 *
		 * */
		new htmlWebpackPlugin(
		{
			title: "This is the result",
			filename: "./index.html",                   /** 注入js后的文件*/
			template: "./src/index.html",               /** 注入前的模板文件*/
			inject: "body",                             /**  注入位置*/
			favicon: "",                                /** 网站icon*/
			minify: {                                   /** 压缩参数*/
				caseSensitive: false,
				collapseBooleanAttributes: true,
				collapseWhitespace: true
			},
			hash: true,
			cache: true,
			showErrors: true,
			chunks: "",
			chunksSortMode: "auto",
			excludeChunks: "",
			xhtml: false
		}),
	]
}