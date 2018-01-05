let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

// Compile SASS task
gulp.task('styles', () => {
    gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});

// Minify CSS task
gulp.task('minify-css', () => {
    gulp.src('assets/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('assets/css'));
});

// Watch task
gulp.task('default', () => {
    gulp.watch('assets/sass/*.scss', ['styles']);
});

// Development task
gulp.task('dev', () => {
    console.log('-- Development --')
    gulp.start('styles');
    gulp.start('default');
});

// Production task
gulp.task('prod', () => {
    console.log('-- Production --')
    gulp.start('styles');
    gulp.start('minify-css');
});