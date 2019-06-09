import { Constraint_tree } from './constraint'
import { Tree } from './tree'

it('walk', async () => {
  const obj_tree: Constraint_tree = {
    value: 1,
    child$: {
      level2: {
        value: 2,
        child$: {
          level3: {
            value: 3,
            child$: null,
          },
          level3_2: {
            value: 3.2,
            child$: null,
          },
        },
      },
    },
  }

  expect(find_3().value).toBe(3)

  function find_3(): any {
    let result

    Tree.walk(obj_tree, node => {
      node.value == 3 ? result = node : null
    })

    return result
  }
})
