var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
  console.log('nanca rocks');
});

gulp.task('html', function(){
  console.log('something happend to html');
});

gulp.task('styles', function(){
  console.log('css changed');
});


gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles')
  });

});
