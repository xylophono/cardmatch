const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'docs/resources/js')
    .sass('resources/scss/app.scss', 'docs/resources/css');