module.exports = {
    sass: {
        options: {
            sourceMap: false,
            /* output style:
             * default: nested
             * options:  nested, compact, compressed, expanded
             */
            outputStyle: 'compressed'
        },
        files: {
            'src/assets/css/main.css': 'src/assets/css/main.scss',
        }
    }
};