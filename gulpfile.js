const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const mustache = require("gulp-mustache-plus");
const babelRegister = require('babel/register');

const distDir = './dist/';
const cssDir = 'styles';
const jsDir = 'scripts';

gulp.task('sass', function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${distDir}${cssDir}`));
});

gulp.task('js', () => {
  return gulp.src('scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-es2015-modules-amd']
    }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('html', () => {
  return gulp.src('./templates/*.mustache')
    .pipe(mustache({}, {}, {
      header: './templates/partials/header.mustache',
      footer: './templates/partials/footer.mustache'
    }))
    .pipe(gulp.dest(`${distDir}`));
});

gulp.task('sass:watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('html:watch', function() {
  gulp.watch('./templates/**/*.mustache', ['html']);
});

gulp.task('js:watch', () => {
  gulp.watch('./scripts/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'html', 'js'], () => {});

gulp.task('watch', ['sass:watch', 'html:watch', 'js:watch'], () => {});

