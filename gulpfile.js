const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

const distDir = './dist/';
const cssDir = 'styles';
const jsDir = 'scripts';

gulp.task('sass', function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(`${distDir}${cssDir}`));
});

gulp.task('imgmin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('js', () => {
  return gulp.src('scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-es2015-modules-amd']
    }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('html', () => {
  return gulp.src('./templates/*.hbs')
    .pipe(handlebars({}, {
      batch: ['./templates/partials/'],
      data: ['./templates/data/']
    }))
    .pipe(rename((path) => path.extname = '.html'))
    .pipe(gulp.dest(`${distDir}`));
});

gulp.task('sass:watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('html:watch', function() {
  gulp.watch('./templates/**/*.hbs', ['html']);
});

gulp.task('js:watch', () => {
  gulp.watch('./scripts/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'html', 'js'], () => {
});

gulp.task('watch', ['sass:watch', 'html:watch', 'js:watch'], () => {
});

