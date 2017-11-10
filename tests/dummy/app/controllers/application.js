import Controller from '@ember/controller';

export default Controller.extend({
  root: {
    name: 'ember-basic-tree',
    children: [{
      name: 'app',
      children: [{
        name: 'components'
      },{
        name: 'controllers'
      },{
        name: 'helpers'
      },{
        name: 'models'
      },{
        name: 'routes'
      },{
        name: 'styles',
        children: [{
          name: 'app.css', leaf: true
        }]
      },{
        name: 'templates',
        children: [{
          name: 'components'
        },{
          name: 'application.hbs', leaf: true
        }]
      }]
    },{
      name: 'config',
      children: [{
        name: 'environment.js', leaf: true
      },{
        name: 'targets.js', leaf: true
      }]
    },{
      name: 'public',
      children: [{
        name: 'crossdomain.xml', leaf: true
      },{
        name: 'robots.txt', leaf: true
      }]
    },{
      name: '.editorconfig', leaf: true
    },{
      name: '.ember-cli', leaf: true
    },{
      name: '.eslintrc.js', leaf: true
    },{
      name: '.gitignore', leaf: true
    },{
      name: 'ember-cli-build.js', leaf: true
    },{
      name: 'package.json', leaf: true
    },{
      name: 'README.md', leaf: true
    }]
  }
});
