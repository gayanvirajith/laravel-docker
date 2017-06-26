module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  angularapp: [ 'src/angularapp/**/*.js' ],
  assets: [ 'src/assets/js/**/*.js' ]
};
