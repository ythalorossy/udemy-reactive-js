'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    path = require('path'),
    fs = require('fs');

gulp.task('scripts:server', () => {
    return gulp.src('./src-server/**/*.js')
            .pipe($.cached('server'))   // if didn't change, don't process
            .pipe($.babel())
            .pipe(gulp.dest('./build'));
});

gulp.task('watch:scripts:server', gulp.series(
    "scripts:server",
    () => gulp.watch('./src-server/**/*.js', gulp.series('scripts:server')))
);

gulp.task('watch:scripts:client', () => {
    const files = fs.readdirSync('./src-client');
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (path.extname !== '.js')
            continue;

        initBlundlerWatch(path.join('src-client', file));
    }

    return gulp.watch('./src-client/**/*.js')
        .on('change', initBlundlerWatch);
});

gulp.task('watch:scripts', gulp.parallel(
    'watch:scripts:client', 
    'watch:scripts:server'));

let bundlers = {};

function initBlundlerWatch(file) {
    if (bundlers.hasOwnProperty(file))
        return;
    
    const bundler = createBundler(file);
    bundlers[file] = bundler;

    const watcher = watchify(bundler);
    const filenane = path.basename(file);

    function bundle() {
        return bundler
                .bundle()
                .on('error', error => console.error(error))
                .pipe(source(filenane))
                .pipe(gulp.dest('./public/build'));
    }

    watcher.on('update', bundle);
    watcher.on('time', time => console.log(`Built client in ${time}ms`));

    bundle();
}

function createBundler(file) {
    const bundler = browserify(file);
    bundler.transform(babelify);
    return bundler;
}