/**
 * @example
 * ```
 * ['super', 'admin']
 * ```
 */
export type Role_List = string[]

export interface Role_Can_Fn {
  (): boolean
}

export type Role_Can = boolean | Role_Can_Fn

/**
 * @example
 * ```
 * // Action `delete` on `post` table.
 * {
 *   admin: true, // Admin can do it.
 *   author: function() { return post.is_written_by_him } // Conditional
 *   regular: false, // Not necessary, you can skip falsy permission
 * }
 * ```
 */
export interface Role_Map {
  [role: string]: Role_Can
}

/**
 * More concise way of organizing actions
 *
 * @example
 * {
 *   read: ['admin', 'regular']
 *   create: ['admin']
 * }
 */
export interface Action$ {
  create?: Role_Map
  read?: Role_Map
  update?: Role_Map
  delete?: Role_Map

  // Custom actions.
  [action: string]: Role_Map
}

/**
 * Data Structure of Each Level of Permission Table
 *
 * Each level of permission table is a "permission node" and
 * each node satisfies this interface.
 *
 * @example
 * ```
 * {}
 * ```
 */
export interface Permission_Node {
  /**
   * Node type
   *
   * Optional, for more clear node classification.
   *
   * @example table|column|level1|level2...
   */
  type?: string

  /**
   * Node name
   *
   * Optional, for more clear node identification.
   *
   * @example table_product|table_user|column_username|column_id...
   */
  name?: string

  /**
   * Child Nodes
   *
   * They have the same structure as any node
   */
  children?: Permission_Node$

  /**
   * Registered Actions and Permission Definition
   *
   * @example
   * ```
   * {
   *   read: {admin: true, regular_user: function() { return he.is_paid }},
   *   delete: {admin: true},
   * }
   * ```
   */
  action: Action$

  /**
   * Weather this node is initialized
   */
  initialized: boolean
}

export interface Permission_Node$ {
  [child: string]: Permission_Node
}
