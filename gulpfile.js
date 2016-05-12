var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['pug', 'sass', 'image', 'js', 'serve']);

gulp.task('sass', function() {
  gulp.src('./src/sass/application.sass')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit("end");
    }}))
    .pipe(sass({indentedSyntax: true}).on('error', util.log))
    .pipe(concat("application.css"))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('pug', function() {
  gulp.src('./src/pug/*.pug')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit("end");
    }}))
    .pipe(pug({pretty: true}).on('error', util.log))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('image', function () {
 gulp.src('./src/img/*')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit("end");
  }}))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./dist/img/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error);
        this.emit("end");
    }}))
    .pipe(concat("application.js"))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename("application.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/pug/**/**', ['pug']);
  gulp.watch('./src/img/**/**', ['image']);
  gulp.watch('./src/js/**/*.js', ['js']);
});