var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/scss/**/*.scss') // Берем источник
        .pipe(sass({outputStyle: 'compressed'})) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку build/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ["./", "./src"] 
        }
    });
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});