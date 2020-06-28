const { src, dest, watch, task, series } = require('gulp')
var del = require('del');

//add any other folders from your src directory that you want to appear in the dist directory
var buildDirecotry = [
  'src/index.html',
  'src/css/**/*.*',
  'src/img/**/*.*',
  'src/js/**/*.*',
  'src/fonts/**/*.*'
];


task('netlifybuild', function () {
  return src(buildDirecotry, { base: './src' })
    .pipe(dest('build'));
});

task('deploy', function () {
  return src(buildDirecotry, { base: './src' })
    .pipe(dest('dist'));
});

task('cleanup', function () {
  return del( 'dist')
   
});



exports.netlifybuild = task('netlifybuild');
exports.deploy = task('deploy');
exports.cleanup = series('cleanup', 'deploy')