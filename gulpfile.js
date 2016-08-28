var gulp = require('gulp');
var run = require('gulp-run');
var runSequence = require('run-sequence');

gulp.task('webpack', function()
{
    return run('webpack').exec();
});

gulp.task('copyIndex', function (callback) 
{
    return gulp.src('index.html').pipe(gulp.dest('dist/'));
});

gulp.task('copyElectron', function (callback) 
{
    return gulp.src('electron/**').pipe(gulp.dest('dist/'));
});

gulp.task('openInElectron', function()
{
    return run('electron ./dist').exec();
});

gulp.task('build', function (callback)
{
    runSequence('webpack', 'copyIndex', 'copyElectron', callback);
});

gulp.task('run', function (callback)
{
    runSequence('openInElectron', callback);
});

gulp.task('buildAndRun', function (callback)
{
    runSequence('build', 'run', callback);
});