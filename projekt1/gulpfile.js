"use strict";

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./gulp.config')();

gulp.task('default',['libsjs','libscss'], function(){	
});

gulp.task('libsjs', function () {
	//log('Concat all libs');
	//console.log('config.alllibsjs: ' + config.alllibsjs);	
	return gulp.src(config.alllibsjs)
		 .pipe($.concat('libs.js'))
		.pipe(gulp.dest(config.destJs));
	
});
//alllibscss
gulp.task('libscss', function(){
	return gulp.src(config.alllibscss)
        .pipe($.concat('libs.css'))
        .pipe(gulp.dest(config.destCss));
});
