# Children

You can override the `childrenComponent` to render recursive data.

The default children component yields to the parent block in order to render static content:

{{docs-snippet name="tree-children.hbs"}}

Here we override the children component to create an infinitely recursive tree:

{{demo-custom-children-infinite}}

Here we render a recursive JavaScript structure:

{{demo-custom-children-js}}

Also see the {{docs-link 'Recursive Data example' 'docs.examples.recursive'}}.
