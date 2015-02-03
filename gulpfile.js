var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function () {
    gulp.src('less/**/*.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .on('error', function(err){
              console.log(err.message);
              this.end();
        })
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['less']);