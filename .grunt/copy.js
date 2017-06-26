module.exports = {
  font: {
    files: [{
      expand: true,
      cwd: 'src/assets/fonts',
      src: [ '**/*.{<%= fonts.extensions %>}' ],
      dest: 'src/public/fonts/'
    }]
  },

  image: {
    files: [{
      expand: true,
      cwd: 'src/assets/images',
      src: [ '**/*.{<%= images.extensions %>}' ],
      dest: 'src/public/images/'
    }]
  },

  json: {
    files: [{
      expand: true,
      cwd: 'src/assets/json',
      src: ['**/*.json'],
      dest: 'src/public/json/'
    }]
  },
};
