module.exports = function (config) {
    "use strict";

    config.set({

        basePath: ".",

        files: [
            // angular code
            "bower_components/angular/angular.js",
            // test code
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/underscore/underscore-min.js",
            "app.js",
            "**/savings/*.js",
            "**/savings/*.html"
        ],

        autoWatch: true,

        frameworks: ["jasmine"],

        browsers: ["Chrome"],

        plugins: [
            "karma-chrome-launcher",
            "karma-jasmine"
        ]
    });
};