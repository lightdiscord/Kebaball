module.exports = (mode) => ({
    test: /\.svelte$/,
    loader: 'svelte-loader',
    options: {
        emitCss: true,
        hotReload: mode === 'production',
    },
});
