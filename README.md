#### It's a refactoring of [AlexKVal/react-thinking](https://github.com/AlexKVal/react-thinking/)
by using React-Bootstrap http://react-bootstrap.github.io/

Frameworks used:
- Bootstrap
- React
- React-Bootstrap
- RequireJS
- Almond

In console run:

    $ git clone https://github.com/AlexKVal/react-with-bs3
    $ cd react-with-bs3
    $ bower install
    $ npm install -g react-tools
    $ jsx --extension jsx jsx/ build/
    $ node bower_components/r.js/dist/r.js -o build.js
    $ python -m SimpleHTTPServer 8000 & open http://localhost:8000

Result should look like this:

![](https://raw.githubusercontent.com/AlexKVal/react-thinking/images/images/result.png)
