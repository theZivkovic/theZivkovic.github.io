"use strict";

const gulp = require("gulp");
const concat = require("gulp-concat");
const maps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const del = require("del");
const inject = require("gulp-inject");
const watch = require("gulp-watch");

gulp.task("concatScripts", () => {
	return gulp.src([
			'libs/three.min.js',
			'libs/orbitControls.js',
			'javascripts/factory.js',
			 'javascripts/app.js'
			])
			.pipe(maps.init())
			.pipe(concat('bundle.js'))
			.pipe(maps.write('./'))
			.pipe(gulp.dest('javascripts'));
});

gulp.task('minifyScripts', ['concatScripts'], () => {
	return gulp.src("javascripts/bundle.js")
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest("javascripts"));
});

gulp.task('clean', () => {
	del(['dist', 'javascripts/bundle*.js*']);
});

gulp.task('build', ['minifyScripts'], () => {
	return gulp.src(['css/style.css', 'javascripts/bundle.min.js', 'index.html', 'libs/normalize-css/normalize.css'], { base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('watchFiles', () => {
	gulp.watch(['javascripts/app.js', 'javascripts/factory.js'], ['concatScripts']);
});

gulp.task('default', ['clean'], () => {
	gulp.start('build');
});

