var gulp = require('gulp');
var mocha = require('mocha');
var del = require('del');

var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

// gulp.task('watch-mocha', function () {
//     gulp.watch([])
// });

// gulp.task('clean', function(cb) {
//     del([
//         'dist/*'
//         ], cb);
// });

// gulp.task('test', function () {

// });
