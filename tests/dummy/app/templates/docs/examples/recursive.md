# Recursive Data Example

In this example, we render a recursive ember-data model which was loaded by the
route's `model` hook. We override the `childrenComponent` to handle the model's
recursive structure.

We use the tree node's `onExpanded` action to sync the component's expanded
state with the model's `isExpanded` attribute. The model will store the state
of the tree if we transition to a different route.

{{demo-recursive root=this.model}}
