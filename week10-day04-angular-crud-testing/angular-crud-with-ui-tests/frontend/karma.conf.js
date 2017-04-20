module.exports = (config) => {
  config.set({
    basePath: '',
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/*.js',
      // you would have js/**/*.js if it is a nested file
      'spec/**/*.spec.js'

    ],
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['spec'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],
    singleRun: true
  });
};
