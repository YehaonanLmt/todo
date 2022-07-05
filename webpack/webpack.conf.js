const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const envConfig = process.env.NODE_ENV === 'production' ? require('./webpack.prod') : require('./webpack.dev');

module.exports = (env) => {
  return merge(commonConfig(env), envConfig);
}