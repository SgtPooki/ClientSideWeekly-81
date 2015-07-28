  /**
   *
   */
var htmlmin = require('gulp-htmlmin');
var bytediff = require('gulp-bytediff');

module.exports = {
    dependencies: [],
    task: function (gulp) {
        return gulp.src('src/html/**/*.html')
            .pipe(bytediff.start())
            .pipe(htmlmin({
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeOptionalTags: true,
                removeEmptyElements: false
            }))
            .pipe(bytediff.stop())
            .pipe(gulp.dest('dist'))
    }
};
