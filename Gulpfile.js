var gulp = require('gulp'),
  jsonmin = require('gulp-jsonmin');

gulp.task('minify', function () {
  return gulp.src(['data/not_compressed/*.json'])
    .pipe(jsonmin())
    .pipe(gulp.dest('data'));
});
