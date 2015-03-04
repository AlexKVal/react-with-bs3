requirejs.config({
  baseUrl: 'jsx/components',
  paths: {
    react: '/bower_components/react/react',
    JSXTransformer: "/bower_components/react/JSXTransformer",
    jsx: "/bower_components/requirejs-react-jsx/jsx",
    text: "/bower_components/requirejs-text/text",
    'react-bootstrap': '/bower_components/react-bootstrap/react-bootstrap',
    app: '../code'
  }
});

requirejs(['jsx!app'], function(App) {
  var app = new App();
  app.init();
});
