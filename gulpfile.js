'use strict';
 
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('scss/app.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({    
    port: 9001
  });
});

gulp.task('build', ['sass', 'sass:watch']);
 
gulp.task('default', ['connect']);