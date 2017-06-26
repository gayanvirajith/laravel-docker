module.exports = {
  compile: {
    src: "src/app/",
    dest: "src/docs/api/",
    options: {
      // debug: true,
      includeFilters: [ ".*Controller\\.php$" ],
    }
  }
};
