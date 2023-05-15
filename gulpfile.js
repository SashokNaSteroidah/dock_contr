const gulp = require('gulp')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const csso = require('gulp-csso')
const browserSync = require('browser-sync').create() // Создаем сервер

gulp.task('csspref',function pref(done) {
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("dist"))
    done()
})

gulp.task('min',function min(done) {
    gulp.src('./css/style.css')
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'));
    done()
})


function css_convert (done) {
    gulp.src("./**/*.css")
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
    done()
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./" // Здесь пишется папка для отслеживания
        },
        port: 3000 // Пишем порт для сервера
    });
    done()
}

function reload(done){
    browserSync.reload(); // Скрипт перезагрузки браузера, при изменениях
    done()
}

function watchFiles() {
    gulp.watch("./css/**/*", css_convert) // Отслеживание измениний в scss файлах
    gulp.watch("./**/*.html", reload) // Отслеживание измениний в html файлах
    gulp.watch("./**/*.js", reload) // Отслеживание измениний в js файлах
    gulp.watch("./**/*.php", reload) // Отслеживание измениний в php файлах
}

gulp.task("default", gulp.parallel(watchFiles, sync)); // Запускаем сервак