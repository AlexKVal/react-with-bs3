requirejs.config({
    paths: {
      lib: 'bower_components',
      react: 'bower_components/react/react',
      'react-bootstrap': 'bower_components/react-bootstrap/react-bootstrap'
    }
});

requirejs(['build/code']);
