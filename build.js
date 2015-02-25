/**
 * r.js -o build.js
 */

/* jshint asi: true */
/* jshint expr: true */
({
    baseUrl: ".",
    paths: {
      react: 'bower_components/react/react',
      'react-bootstrap': 'bower_components/react-bootstrap/react-bootstrap'
    },
    out: "main-built.js",
    findNestedDependencies: true,

    name: 'bower_components/almond/almond',
    include: "main",wrap: true,
    // name: "main",
    preserveLicenseComments: false,
    // optimize: "none"
})
