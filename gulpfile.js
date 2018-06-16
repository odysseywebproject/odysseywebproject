const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

const compileSass = (sassOrigin, cssDest, output) => {
    gulp.src(sassOrigin)
        .pipe(sass({
            outputStyle: output
        }))
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(gulp.dest(cssDest));
}

// Botones
let buttonTheme = '1';

gulp.task('sass-buttons', ()=> {
    compileSass(
        `./buttons/theme-${buttonTheme}/dev/buttons-${buttonTheme}.scss`,
        `./buttons/theme-${buttonTheme}/dist/css/`,
        'compressed'
    );
});
