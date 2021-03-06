'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var haml = require('gulp-haml');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');
var postcss = require('gulp-postcss');
var input_sass = 'app/componets/*.+(scss|sass)';
var output_sass = 'app/dev/css/';
var bourbon = require('node-bourbon');

var input_haml = 'app/pages/*.haml';
var output_haml = 'app/dev/';


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('app/static/img/adv/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'adv.png',
                cssName: 'adv.sass',
                cssFormat: 'sass'
            }));

    spriteData.img.pipe(gulp.dest('app/dev/img/adv')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/static/sass/')); // путь, куда сохраняем стили
});


gulp.task('autoprefixer', () =>
    gulp.src('app/components/*.+(scss|sass)')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);



gulp.task('sass', function () {
  return gulp.src('app/components/*.+(scss|sass)')
    .pipe(sass({
      // includePaths: require('node-bourbon').with('other/path', 'another/path') 
      // - or - 
      includePaths: require('node-bourbon').includePaths
     }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/dev/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
 



gulp.task('haml', function () {
  gulp.src(input_haml)
    .pipe(haml())
    .pipe(haml({pretty: true}))
    .pipe(gulp.dest(output_haml))
    .pipe(browserSync.reload({
     stream: true
}))
});



gulp.task('fonts', function() {
  return gulp.src('app/static/fonts/**/*')
  .pipe(gulp.dest('app/dev/fonts'))
  .pipe(browserSync.reload({
     stream: true
}))
})


gulp.task('img', function() {
  return gulp.src('app/static/img/**/*')
  .pipe(gulp.dest('app/dev/img'))
  .pipe(browserSync.reload({
     stream: true
}))
})


gulp.task('scripts', function() {
  return gulp.src(['app/static/js/lib/**/*.js', 'app/static/js/plug/**/*.js', 'app/components/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/dev/js'))
    .pipe(browserSync.reload({
     stream: true
}));
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app/dev'
    },
  })
})



gulp.task('watch', ['browserSync','fonts','img', 'haml', 'sass', 'scripts'], function (){
  gulp.watch('app/**/*.sass', ['sass']);
  gulp.watch('app/components/**/*.js', ['sass']);
  gulp.watch('app/static/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/static/js/**/*.js', ['scripts']);
  gulp.watch('app/static/img/**/*', ['img']);
  gulp.watch('app/pages/**/*.haml', ['haml']);
  gulp.watch('app/pages/**/*.haml', ['haml']);
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/**/*.haml', browserSync.reload);
  gulp.watch('app/static/js/**/*.js', browserSync.reload);
  gulp.watch('app/components/**/*.js', browserSync.reload);
  gulp.watch('app/**/*.sass', browserSync.reload);
  
});




