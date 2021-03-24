var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({ server: "./src", port: 3010 });
    gulp.watch('./src/index.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));