module.exports = {
  apidoc: {
    files: [ 'src/app/**/*.php' ],
    tasks: [ 'apidoc:compile', 'notify:apidoc' ]
  },

  angularapp: {
    files: 'src/angularapp/**/*.js',
    tasks: [ 'newer:jshint:angularapp' ],
  },

  assets_js: {
    files: 'src/assets/js/*.js',
    tasks: [ 'newer:jshint:assets' ],
  },

  assets_sass: {
    files: ['src/assets/css/main.scss'],
    tasks: ['sass', 'autoprefixer']
  },

  laravelapp: {
    files: [ 'src/app/**/*.php', 'src/bootstrap/**/*.php' ],
    tasks: [ 'newer:phplint:laravelapp', 'shell:phpunit' ]
  },

  // enable livereload, see http://livereload.com/
  // little hack to include symlinked file in livereload
  livereload: {
    files: [ 'src/public/**/*', 'src/resources/views/angularjs/application.php' ],
    tasks: [],
    options: {
      livereload: true
    }
  },

  backend_test: {
    files: [ 'src/app/tests/**/*Test.php' ],
    tasks: [ 'shell:phpunit' ]
  },

  frontend_test: {
    files: [ 'src/angularapp/**/*.js' ],
    tasks: [  ]
  },

};