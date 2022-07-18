const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const del = require('del')
const htmlmin = require('gulp-htmlmin')
const sync = require('browser-sync')


function html(){
    src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
}