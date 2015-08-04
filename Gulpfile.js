var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');

// BUILD STYLES FROM SRC SASS
gulp.task('styles', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles/'))
});

// MINIFY IMAGES NEW IMAGES
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// WATCH TASK
gulp.task('default', function() {
  gulp.watch('./src/sass/**/*.scss', ['styles']);
  return gutil.log('Gulp is running modafoca!!');
});
