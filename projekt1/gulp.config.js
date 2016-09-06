module.exports = function(){
	var bowerPath = './bower_components/';
	
	var jsPath = './public/js/';
	var jsPathmin = './src/js/';
	var cssPath = './public/css/';
	
	var config = {
		 alllibsjs: [
			 bowerPath + 'jquery/dist/jquery.min.js'
		 ],
		alllibscss: [
			bowerPath + 'bootstrap/dist/css/bootstrap.min.css'
		 ],
		/*
		alljs: [
			jsPathmin + 'app.js'
		]
		*/
		destJs: jsPath,
		destCss: cssPath
		
	};
	 return config;
};
