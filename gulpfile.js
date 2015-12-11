var gulp	= require('gulp'),
		sass	= require('gulp-sass'),
		minify	= require('gulp-minify-css'),
		uglify	= require('gulp-uglify'),
		concat	= require('gulp-concat'),
		browserify	= require('browserify'),
		reactify	= require('reactify'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer');

gulp.task('books-app-min', function() {
	var bundler = browserify('./src/main/resources/source/react/books-app.jsx');
	bundler.transform(reactify);
	var stream = bundler.bundle();
	return stream
		.pipe(source('books-app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./src/main/resources/static/js/app'));
});
gulp.task('books-app', function() {
	var bundler = browserify('./src/main/resources/source/react/books-app.jsx');
	bundler.transform(reactify);
	var stream = bundler.bundle();
	return stream
		.pipe(source('books-app.js'))
		.pipe(gulp.dest('./src/main/resources/static/js/app'));
});

gulp.task('people-app-min', function() {
	var bundler = browserify('./src/main/resources/source/react/people-app.jsx');
	bundler.transform(reactify);
	var stream = bundler.bundle();
	return stream
		.pipe(source('people-app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./src/main/resources/static/js/app'));
});
gulp.task('people-app', function() {
	var bundler = browserify('./src/main/resources/source/react/people-app.jsx');
	bundler.transform(reactify);
	var stream = bundler.bundle();
	return stream
		.pipe(source('people-app.js'))
		.pipe(gulp.dest('./src/main/resources/static/js/app'));
});

gulp.task('react', ['people-app', 'books-app']);
gulp.task('react-min', ['people-app-min', 'books-app-min']);

gulp.task('sass-min', function() {
	return gulp.src('./src/main/resources/source/sass/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(minify())
		.pipe(gulp.dest('./src/main/resources/static/css'))
});
gulp.task('sass', function() {
	return gulp.src('./src/main/resources/source/sass/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./src/main/resources/static/css'))
});


gulp.task('default', ['react', 'sass']);
gulp.task('minify', ['react-min', 'sass-min']);
