// webpack.mix.js

let mix = require('laravel-mix');

// https://laravel-mix.com/docs/6.0/vue
mix.js('src/app.js', 'dist').vue({ version: 3 });

