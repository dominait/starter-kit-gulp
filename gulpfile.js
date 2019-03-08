const { src, dest, watch, task } = require('gulp')


//build directory

var buildDirecotry = [
  'src/index.html',
  'src/css/**/*.*',
  'src/img/**/*.*',
  'src/js/**/*.*'
];


task('netlifybuild', function () {
  return src(buildDirecotry, { base: './src' })
    .pipe(dest('build'));
});

task('deploy', function () {
  return src(buildDirecotry, { base: './src' })
    .pipe(dest('dist'));
});



exports.netlifybuild = task('netlifybuild');
exports.deploy = task('deploy');