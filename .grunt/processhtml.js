module.exports = {
  options: {
    // to avoid conflicts with grunt-usemin
    commentMarker: 'process',
    customBlockTypes: [
      '.grunt/processhtml_customBlocks/inline.js',
      '.grunt/processhtml_customBlocks/pngEncode.js',
      '.grunt/processhtml_customBlocks/svgEncode.js',
    ],
    data: {
      // set a custom path for insile custom block file
      inline: {
        src: ''
      }
    }
  },
  build_index: {
    options: {
      data: {
        googleAnalytics: {
          uid: '',
          url: ''
        },
      }
    },
    files: {
      'src/resources/views/angularjs/application_production.php': [ 'src/resources/views/angularjs/application.php' ]
    }
  },
  build_templates: {
    options: {
      data: {}
    },
    files: [{
      expand: true,
      cwd: 'src/angularapp',
      src: ['**/*.html', 'directives/dir_template/*.svg'],
      dest: 'src/public/angularapp/'
    }]
  }
};
