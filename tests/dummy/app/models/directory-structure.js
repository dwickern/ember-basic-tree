import { A } from '@ember/array';

export default () => ({
  name: 'ember-basic-tree',
  children: A([{
    name: 'app',
    children: A([{
      name: 'components',
      children: A()
    },{
      name: 'controllers',
      children: A()
    },{
      name: 'helpers',
      children: A()
    },{
      name: 'models',
      children: A()
    },{
      name: 'routes',
      children: A()
    },{
      name: 'styles',
      children: A([{
        name: 'app.css',
        leaf: true
      }])
    },{
      name: 'templates',
      children: A([{
        name: 'components',
        children: A()
      },{
        name: 'application.hbs',
        leaf: true
      }])
    }])
  },{
    name: 'config',
    children: A([{
      name: 'environment.js',
      leaf: true
    },{
      name: 'targets.js',
      leaf: true
    }])
  },{
    name: 'public',
    children: A([{
      name: 'crossdomain.xml',
      leaf: true
    },{
      name: 'robots.txt',
      leaf: true
    }])
  },{
    name: '.editorconfig',
    leaf: true
  },{
    name: '.ember-cli',
    leaf: true
  },{
    name: '.eslintrc.js',
    leaf: true
  },{
    name: '.gitignore',
    leaf: true
  },{
    name: 'ember-cli-build.js',
    leaf: true
  },{
    name: 'package.json',
    leaf: true
  },{
    name: 'README.md',
    leaf: true
  }])
});
