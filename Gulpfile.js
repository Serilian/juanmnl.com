var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// BUILD STYLES FROM SRC SASS
gulp.task('styles', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles/'))
});

// WATCH TASK
gulp.task('default', function() {
  gulp.watch('./src/sass/**/*.scss', ['styles']);
  return gutil.log('Gulp is running modafoca!!');
});
