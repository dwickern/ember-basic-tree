# Children

You can override the `childrenComponent` to render recursive data.

The default children component yields to the parent block in order to render static content:

<DocsSnippet @name="tree-children.hbs"/>

Here we override the children component to create an infinitely recursive tree:

<DemoCustomChildrenInfinite/>

Here we render a recursive JavaScript structure:

<DemoCustomChildrenJs/>

Also see the <DocsLink @route="docs.examples.recursive">Recursive Data example</DocsLink>.
