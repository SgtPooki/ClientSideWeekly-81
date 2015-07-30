/**
*
*/

var browserSync = require('browser-sync').create();

module.exports = {
    dependencies: ['html', 'js1k'],
    task: function (gulp) {
        browserSync.init({
            server: {
                baseDir: "dist/"
            }
        });

        gulp.task('js-watch', ['js1k'], browserSync.reload);
        gulp.task('html-watch', ['html'], browserSync.reload);

        gulp.watch("src/js/**", ['js-watch']);
        gulp.watch("src/html/**", ['html-watch']);
    }
};
