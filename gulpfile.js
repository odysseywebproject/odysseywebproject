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

// Recursos comunes
gulp.task('sass-styles', ()=> {
    compileSass(
        `./src/scss/main-styles.scss`,
        `./src/css/`,
        'compressed'
    );
});

// Botones
let buttonTheme = '1';

gulp.task('sass-buttons', ()=> {
    compileSass(
        `./components/buttons/theme-${buttonTheme}/dev/scss/buttons-${buttonTheme}.scss`,
        `./components/buttons/theme-${buttonTheme}/dist/css/`,
        'compressed'
    );

    compileSass(
        `./components/buttons/docs/scss/buttons-styles.scss`,
        `./components/buttons/docs/css/`,
        'compressed'
    );
});

gulp.task('watch-buttons', ()=> {
    gulp.watch(`./components/buttons/theme-${buttonTheme}/dev/scss/**/*.scss`, ['sass-buttons']);
    gulp.watch(`./components/buttons/docs/scss/**/*.scss`, ['sass-buttons']);
});

gulp.task('watch-styles', ()=> {
    gulp.watch('./src/scss/**/*.scss', ['sass-styles']);
});
