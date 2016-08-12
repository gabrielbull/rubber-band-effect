'use strict';

var fs = require('fs');
var gulp = require('gulp');
var git = require('gulp-git');
var rimraf = require('rimraf');
var Promise = require('bluebird');
var replace = require('gulp-replace');

var cloneRepo = function () {
  return new Promise((resolve) => {
    git.clone('https://github.com/gabrielbull/rubber-band-effect.git', function (err) {
      resolve();
    });
  });
};

var removeRepo = function () {
  return new Promise((resolve) => {
    rimraf.sync('rubber-band-effect');
    resolve();
  });
};

var removePlayground = function () {
  return new Promise((resolve) => {
    rimraf.sync('playground');
    resolve();
  });
};

var copyPlayground = function () {
  return new Promise((resolve) => {
    gulp.src('./rubber-band-effect/playground/**/*')
      .pipe(gulp.dest('./playground/'))
      .on('end', resolve);
  });
};

gulp.task('copy-playground', function (cb) {
  removeRepo()
    .then(removePlayground)
    .then(cloneRepo)
    .then(copyPlayground)
    .then(removeRepo)
    .then(cb);
});
