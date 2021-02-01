# Content

You most likely need to override the tree's `contentComponent`.

The default content component simply renders the tree node's `content` argument:

{{docs-snippet name="tree-content.hbs"}}

There's nothing special about `content`.
You can pass any arguments and access them using `@node.argName`:

{{demo-custom-content-arg}}

You can access arguments that were passed to the tree using `@tree.argName`.
In this example we pass a `clicked` action to the tree and access it from
within the content component using `@tree.clicked`.

{{demo-custom-content-tree-arg}}

You can override the content component for a specific tree node:

{{demo-custom-content-override}}
