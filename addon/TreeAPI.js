/**
 * The public API for a tree.
 *
 * This API is accessible using the `@tree` argument in a `contentComponent`, `expanderComponent` or `childrenComponent`.
 * @class TreeAPI
 * @export _for_api_docs_only
 */
/**
 * The tree's children component.
 *
 * Override for a specific tree node by passing a different `childrenComponent`.
 * @variable childrenComponent
 * @type {Component}
 */
/**
 * The tree's content component.
 *
 * Override for a specific tree node by passing a different `contentComponent`.
 * @variable contentComponent
 * @type {Component}
 */
/**
 * The tree's expander component.
 *
 * Override for a specific tree node by passing a different `expanderComponent`.
 * @variable expanderComponent
 * @type {Component}
 */
/**
 * Constructs a tree node.
 *
 * **Important:** This API is only accessible from the `{{basic-tree}}`'s yielded block,
 * or by using `@tree.Node` in the context of a `childrenComponent`.
 * @variable Node
 * @type {Component}
 */
/**
 * Any other arguments which were passed to the tree.
 * @variable *
 * @type {any}
 */
