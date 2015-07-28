/**
 * The project gulpfile.js
 *
 * @fileOverview
 * @author Russell Dempsey <SgtPooki@gmail.com>
 */

var gulp = require('gulp');
var glob = require('glob');
var path = require('path');

var gulpTaskPaths = glob.sync('./tasks/*.js', {});

var getFilenameFromPath = function getFilenameFromPath(filePath) {
    filePath = path.normalize(filePath);
    return filePath.split(path.sep).slice(-1)[0].replace('.js', '');
};

gulp.task('default', function () {});

gulpTaskPaths.forEach(function (filePath) {
    var gulpTask = require(filePath.replace('.js', ''));
    var taskName = getFilenameFromPath(filePath);

    gulp.task(taskName, gulpTask.dependencies, function (cb) {
        //immediately prior to task start
        gulpTask.task(gulp)
            .on('end', cb);
    });
});
