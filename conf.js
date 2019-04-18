exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 100000,
    specs: ['./**/*.spec.js']
}