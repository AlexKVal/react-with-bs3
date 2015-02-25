requirejs.config({
  paths: {
    react: 'bower_components/react/react',
    JSXTransformer: "bower_components/react/JSXTransformer",
    'react-bootstrap': 'bower_components/react-bootstrap/react-bootstrap',
    jsx: "bower_components/requirejs-react-jsx/jsx",
    text: "bower_components/requirejs-text/text",
    app: 'jsx/code'
  },

  jsx: {
    fileExtension: ".jsx",
    transformOptions: {
      harmony: true,
      stripTypes: false
    },
    usePragma: false
  }
});

requirejs(['jsx!app'], function(App) {
  var app = new App();
  app.init();
});
