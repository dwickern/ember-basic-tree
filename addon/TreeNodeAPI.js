/**
 * The public API for a tree node.
 *
 * This API is accessible using the `@node` argument in a `contentComponent`, `expanderComponent` or `childrenComponent`.
 * @class TreeNodeAPI
 * @export _for_api_docs_only
 */
/**
 * Whether the tree node can be expanded and collapsed.
 *
 * Defaults to `true` if the tree node was created in block form:
 *
 * ```hbs
 * <tree.Node>
 *   ...
 * </tree.Node>
 * ```
 *
 * Defaults to `false` if the tree node was created inline:
 *
 * ```hbs
 * <tree.Node/>
 * ```
 * @variable isExpandable
 * @type {boolean}
 */
/**
 * Whether the tree node is expanded.
 * Defaults to `false`.
 * @variable isExpanded
 * @type {boolean}
 */
/**
 * The tree node's children component.
 *
 * Defaults to the `childrenComponent` passed as an argument to the `{{basic-tree}}`.
 * @variable childrenComponent
 * @type {Component}
 */
/**
 * The tree node's content component.
 *
 * Defaults to the `contentComponent` passed as an argument to the `{{basic-tree}}`.
 * @variable contentComponent
 * @type {Component}
 */
/**
 * The tree node's expander component.
 *
 * Defaults to the `expanderComponent` passed as an argument to the `{{basic-tree}}`.
 * @variable expanderComponent
 * @type {Component}
 */
/**
 * Any other arguments which were passed to the tree node.
 * @variable *
 * @type {any}
 */
/**
 * Expand the tree node
 * @function actions.expand
 * @return {void}
 */
/**
 * Collapse the tree node
 * @function actions.collapse
 * @return {void}
 */
/**
 * Toggle the tree node between expanded and collapsed
 * @function actions.toggle
 * @return {void}
 */
