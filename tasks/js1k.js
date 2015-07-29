/**
 *
 */

var bytediff = require('gulp-bytediff');
var jscrush = require('gulp-jscrush');
var micro = require('gulp-micro');
var closureCompiler = require('gulp-closure-compiler');

module.exports = {
    dependencies: [],
    task: function (gulp) {
        return gulp.src('src/js/index.js')
            .pipe(bytediff.start())
            .pipe(bytediff.stop())
            .pipe(closureCompiler({
                compilerPath: 'bower_components/closure-compiler/compiler.jar',
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                fileName: 'index.js'
            }))
            .pipe(bytediff.start())
            .pipe(jscrush())
            .pipe(bytediff.stop())
            .pipe(micro({limit: 1024})).
                on('error', function (error) {
                    console.log(error.message);
                    this.emit('end');
                    return error.message;
                })
            .pipe(gulp.dest('dist'));
    }
};
