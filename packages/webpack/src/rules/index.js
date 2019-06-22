module.exports = (mode) => [
    require("./css")(mode),
    require("./javascript"),
    require("./svelte")(mode),
];
