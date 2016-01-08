var gulp	= require('gulp'),
		sass	= require('gulp-sass'),
		minify	= require('gulp-minify-css'),
		uglify	= require('gulp-uglify'),
		concat	= require('gulp-concat'),
		browserify	= require('browserify'),
		reactify	= require('reactify'),
		es = require('event-stream'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer');

gulp.task('react', function() {
	var files = [
		{
			src: './client/src/react/books-app.jsx',
			dist: './client/dist/js/app/books-app.js'
		},
		{
			src: './client/src/react/manage-app.jsx',
			dist: './client/dist/js/app/manage-app.js'
		},
		{
			src: './client/src/react/resources-app.jsx',
			dist: './client/dist/js/app/resources-app.js'
		},
		{
			src: './client/src/react/edit-app.jsx',
			dist: './client/dist/js/app/edit-app.js'
		}
	];

	var tasks = files.map(function(entry) {
		return browserify(entry.src)
			.transform(reactify)
			.bundle()
			.pipe(source(entry.dist))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('.'));
		});

	return es.merge.apply(null, tasks);
});

gulp.task('react-min', function() {
	var files = [
		{
			src: './client/src/react/books-app.jsx',
			dist: './client/dist/js/app/books-app.js'
		},
		{
			src: './client/src/react/manage-app.jsx',
			dist: './client/dist/js/app/manage-app.js'
		},
		{
			src: './client/src/react/resources-app.jsx',
			dist: './client/dist/js/app/resources-app.js'
		},
		{
			src: './client/src/react/edit-app.jsx',
			dist: './client/dist/js/app/edit-app.js'
		}
	];

	var tasks = files.map(function(entry) {
		return browserify(entry.src)
			.transform(reactify)
			.bundle()
			.pipe(source(entry.dist))
			.pipe(gulp.dest('.'));
		});

	return es.merge.apply(null, tasks);
});

gulp.task('sass-min', function() {
	return gulp.src('./client/src/sass/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(minify())
		.pipe(gulp.dest('./client/dist/css'))
});
gulp.task('sass', function() {
	return gulp.src('./client/src/sass/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./client/dist/css'))
});

gulp.task('move', function() {
  gulp.src([
		'./client/dist/**'
	], { base: './client/dist/' })
  .pipe(gulp.dest('src/main/resources/static/'));
});

gulp.task('default', ['react', 'sass'], function() {
	gulp.start('move');
});
gulp.task('minify', ['react-min', 'sass-min'], function() {
	gulp.start('move');
});
