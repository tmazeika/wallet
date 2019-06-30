import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import rename from 'gulp-rename';

const cleanCSS = require('gulp-clean-css');

const prod: boolean = Boolean(util.env.production);

export function styles() {
    return gulp.src('src/styles/**/*.sass')
        .pipe(!prod ? sourcemaps.init() : util.noop())
        .pipe(sass().on('error', sass.logError))
        .pipe(prod ? cleanCSS({level: 2}) : util.noop())
        .pipe(!prod ? sourcemaps.write() : util.noop())
        .pipe(gulp.dest('static/css/'));
}

export function watch() {
    return gulp.watch('src/styles/**/*.sass', {ignoreInitial: false}, styles);
}

export function clean() {
    return del([
        'static/css/**/*',
        '!**/.gitignore',
    ]);
}

export function env() {
    return gulp.src('.env.example')
        .pipe(rename('.env'))
        .pipe(gulp.dest('.', {overwrite: false}));
}

export default gulp.parallel(env, gulp.series(clean, styles));
