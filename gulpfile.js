const gulp        = require('gulp'),
      sass        = require('gulp-sass'),
      webpack     = require('webpack-stream'),
      rename      = require('gulp-rename'),
      browserSync = require('browser-sync').create();

gulp.task('sync', function() {
    browserSync.init({
        server: {
            basedir: './'
        },

        open: false
    });

    gulp.watch('resources/sass/**/*', ['sass']);
    gulp.watch('resources/js/**/*', ['webpack']);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('resources/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('webpack', function() {
    return gulp.src('resources/js/main.js')
        .pipe(webpack())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('copy-vendor', function() {
    return gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('css/vendor'));
});
