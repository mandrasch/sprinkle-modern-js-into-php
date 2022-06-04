const mix = require('laravel-mix');

require('laravel-mix-svelte');

mix.js('src/app.js', 'dist')
    .sass('src/styles/app.scss', 'dist')
    .svelte();