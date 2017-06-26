module.exports = {
    htmlmin: {                                     // Task
        options: {                                 // Target options
            //removeComments: true,
            //collapseWhitespace: true,
            //removeScriptTypeAttributes: true,
            //minifyJS: true
            // collapseBooleanAttributes: true,
            // removeCommentsFromCDATA: true,
            // removeOptionalTags: true
        },
        files: {
            'src/resources/views/angularjs/application_production.php': 'src/resources/views/angularjs/application_production.php' // 'destination': 'source'
        }
    }
};