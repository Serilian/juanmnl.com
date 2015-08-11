var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    handlebars = require('gulp-handlebars'),
    hb = require('gulp-hb'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');



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

gulp.task('sass', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/styles/'));
});

gulp.task('hbs', function() {
  gulp.src('./src/index.html')
    .pipe(hb({
      data: './src/templates/data/**/*.{js,json}',
      helpers: './src/templates/helpers/*.js',
      partials: './src/templates/partials/**/*.hbs'
    }))
    .pipe(gulp.dest('./build/'));
});

// Make sure compilation finishes before sending reload stream
gulp.task('sass-watch', ['sass'], browserSync.reload);
gulp.task('hbs-watch', ['hbs'], browserSync.reload);

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'hbs' ,'jshint'], function() {

  browserSync.init({
    server: "./build"
  });

  gulp.watch("src/sass/*.scss", ['sass-watch']);
  gulp.watch("src/templates/**/*.hbs", ['hbs-watch']);
  return gutil.log("🎵 I've got a feeling, somebody's watching me!! Oh! oh eh oh!🎵");
});


// WATCH TASK
gulp.task('default', ['serve']);

// BUILD
gulp.task('build', ['jshint', 'html', 'sass', 'js', 'imagemin', 'vendor']);
