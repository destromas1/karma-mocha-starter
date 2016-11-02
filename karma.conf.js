module.exports = function (config) {
  config.set({

    frameworks: ['mocha', 'chai'],

    files: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/underscore/underscore.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'app/app.js',
      'app/controllers/*.js',
      'app/services/*.js',
      'test/**/*.spec.js'],

    port: 3001,

    reporters: ['progress', 'coverage'],
    
    

    browsers: ['Chrome']
  });
};

