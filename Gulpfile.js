var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync');


// DEFAULT
gulp.task('default', ['watch']);

// BUILD STYLES FROM SRC SASS
gulp.task('styles', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles/'))
});

// COPY HTML FILE (TEMP)
gulp.task('html', function() {
  gulp.src('src/*.html').pipe(gulp.dest('build/'));
});

// JSHINT
gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
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
gulp.task('watch', function() {
  gulp.watch('source/js/**/*.js', ['jshint']);
  gulp.watch('./src/sass/**/*.scss', ['styles']);
  gulp.watch('./src/*.html', ['html']);
  return gutil.log("🎵 I've got a feeling, somebody's watching me!! Oh! oh eh oh!🎵");
});
