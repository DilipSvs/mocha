'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

gulp.task('test', function(cb) {
  disableLogging();

  gulp.src(['*.js'])
      .pipe(istanbul())
      .pipe(istanbul.hookRequire())
      .on('finish', function() {
        gulp.src(['test/**/*.js'])
            .pipe(mocha())
            .pipe(istanbul.writeReports({
              dir: './reports/coverage'
            }))
            .pipe(istanbul.enforceThresholds({
              thresholds: {
                global: 90
              }
            }))
            .on('end', cb);
      });
});


gulp.task('default', ['test']);

function disableLogging() {
  if (!_.isString(process.env.LOGGING_CONSOLE_LEVEL)) {
    process.env.DEBUG = '';
    process.env.LOGGING_CONSOLE_LEVEL = 'OFF';
  }
}
