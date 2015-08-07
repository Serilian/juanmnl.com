var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html');
    minifyCSS = require('gulp-minify-css');
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync');

// BUILD
gulp.task('build', ['jshint', 'html', 'css', 'js', 'imagemin', 'vendor']);

// DEFAULT
gulp.task('default', ['watch']);

// BUILD STYLES FROM SRC SASS
gulp.task('css', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/styles/'));
});

// BUILD VENDOR JS FOLDER FROM SRC LIB
gulp.task('vendor', function() {
  gulp.src('./src/lib/**/*')
    .pipe(gulp.dest('./build/public/vendor/'));
});

// BUILD JS FOLDER FROM SRC LIB
gulp.task('js', function() {
  gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

// COPY HTML FILE (TEMP)
gulp.task('html', function() {
  var opts = {
    quotes: true,
    conditionals: true
  };
  gulp.src('src/*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('build/'));
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
  gulp.watch('./src/sass/**/*.scss', ['css']);
  gulp.watch('./src/*.html', ['html']);
  return gutil.log("🎵 I've got a feeling, somebody's watching me!! Oh! oh eh oh!🎵");
});
