# ember-basic-tree

![CI](https://github.com/dwickern/ember-basic-tree/workflows/CI/badge.svg)

A customizable template-driven tree component

## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v14 or above


## Installation

```
ember install ember-basic-tree
```


## Usage

[View the docs here](https://dwickern.github.io/ember-basic-tree/).

```hbs
<BasicTree as |tree|>
  <tree.Node @content="ember" @isExpanded={{true}}>
    <tree.Node @content="basic"/>
    <tree.Node @content="tree"/>
  </tree.Node>
</BasicTree>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
