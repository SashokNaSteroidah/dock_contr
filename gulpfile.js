const gulp = require('gulp');
const sass = require('gulp-sass');
const purgecss = require('gulp-purgecss');

gulp.task('default', function () {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass())
        .pipe(purgecss({
            content: ['.//*.js']
        }))
        .pipe(gulp.dest('./dist'));
});