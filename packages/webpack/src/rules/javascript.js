module.exports = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env'],
    },
};
