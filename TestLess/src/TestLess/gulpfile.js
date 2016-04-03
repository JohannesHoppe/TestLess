/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    less = require("gulp-less"),
    lessPluginCleanCss = require('less-plugin-clean-css'),
    cleanCSSPlugin = new lessPluginCleanCss({ advanced: true }),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename");

var paths = {
    lessConfig: 'styles/main.config.less',
    webroot: "./wwwroot/"
};

gulp.task("less-min", function () {
    return gulp.src(paths.lessConfig)
        .pipe(sourcemaps.init())
        .pipe(less({ plugins: [cleanCSSPlugin] }))
        .pipe(rename('app-bundle.min.css'))
        .pipe(sourcemaps.write('/.'))
        .pipe(gulp.dest(paths.webroot + '/css'));
});
gulp.task("less", function () {
    return gulp.src(paths.lessConfig)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('app-bundle.css'))
        .pipe(sourcemaps.write('/.'))
        .pipe(gulp.dest(paths.webroot + '/css'));
});