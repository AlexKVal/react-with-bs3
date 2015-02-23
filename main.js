requirejs.config({
  paths: {
    react: 'bower_components/react/react',
    'react-bootstrap': 'bower_components/react-bootstrap/react-bootstrap'
  }
});

requirejs(['build/code']);
