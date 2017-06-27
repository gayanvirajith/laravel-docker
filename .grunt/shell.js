module.exports = {
  artisan: {
    options: {
      stdout: true,
      stderr: true
    },
    command: 'php src/artisan serve'
  },
  composer: {
    options: {
      stdout: true,
      stderr: true
    },
    command: 'cd src;composer install'
  },
  bower: {
    options: {
      stdout: true,
      stderr: true
    },
    command: 'bower install'
  },
  ls: {
    options: {
      stdout: true,
      stderr: true
    },
    command: 'ls'
  },
  phpunit: {
    options: {
      stdout: true,
      stderr: true
    },
    command: './src/vendor/bin/phpunit'
  }
};
