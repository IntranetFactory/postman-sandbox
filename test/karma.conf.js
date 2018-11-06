// Karma configuration
// Generated on Mon Nov 09 2015 18:53:12 GMT+0530 (IST)
process.env.CHROME_BIN = require('puppeteer').executablePath(); // eslint-disable-line no-process-env

module.exports = function (config) {
    var configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            '../index.js',
            '../test/unit/**/*.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../index.js': ['browserify'], // Mention path as per your test js folder
            '../test/unit/**/*.js': ['browserify'] // Mention path as per your library js folder
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // the number of milliseconds to wait for an idle browser to come back up before bailing
        browserNoActivityTimeout: 20000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // one of: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        // Uncomment "karma-browserify" if you see an error like this:
        // Error: No provider for "framework:browserify"! (Resolving: framework:browserify)
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-browserify',
            'karma-mocha-reporter'
        ],

        // Pass options to the client frameworks.
        client: {
            mocha: {
                timeout: 10000 // 10 seconds
            }
        }
    };

    if (process.env.TRAVIS) { // eslint-disable-line no-process-env
        configuration.customLaunchers = {
            chromeTravis: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        };
        configuration.browsers = ['chromeTravis'];
    }

    config.set(configuration);
};
