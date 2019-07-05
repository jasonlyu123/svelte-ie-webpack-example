const presets = [
    [
        "@babel/preset-env",
        {
            "targets": {
                "ie": "11"
            },
            useBuiltIns: "entry",
            corejs: 3,
        }
    ]
]

module.exports = { presets };