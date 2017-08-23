const gulp = require('gulp');
const zip = require('gulp-zip');

var config = require('./src/config.json');

gulp.task('zip', () =>
    gulp.src('./src/*')
        .pipe(zip( config.name + '.zip'))
        .pipe(gulp.dest('./build'))
);