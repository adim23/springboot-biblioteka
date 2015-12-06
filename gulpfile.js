var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    minify  = require('gulp-minify-css'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    browserify  = require('browserify'),
    reactify  = require('reactify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('react-min', function() {
  var bundler = browserify('./src/main/resources/source/react/app.jsx');
  bundler.transform(reactify);
  var stream = bundler.bundle();
  return stream
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./src/main/resources/static/js'));
});

gulp.task('react', function() {
  var bundler = browserify('./src/main/resources/source/react/app.jsx');
  bundler.transform(reactify);
  var stream = bundler.bundle();
  return stream
    .pipe(source('app.js'))
    .pipe(gulp.dest('./src/main/resources/static/js'));
});

gulp.task('sass', function() {
  return gulp.src('./src/main/resources/source/sass/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(minify())
    .pipe(gulp.dest('./src/main/resources/static/css'))
});

gulp.task('default', ['react-min', 'sass']);
