const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dist    = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dist,
  clearBeforeBuild: '!(img|favicon.ico)',
  html: function(context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'React Yelp Clone',
        head: '<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">\
               <link rel="icon" href="/favicon.ico" type="image/x-icon">'
      })
    }
  }
});

module.exports = config;
