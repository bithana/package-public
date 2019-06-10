import { dump } from '../../print/src'
import { Constraint_tree } from './constraint'
import { Tree } from './tree'

it('walk', async () => {
  const tree: Constraint_tree = {
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
  right_ancestor()

  function right_ancestor() {
    Tree.walk(tree, node => {
      if (node.name === 'level2') {
        console.log(node.name)
        expect(node.ancestor$.length).toBe(1)
        expect(node.ancestor$[0].value).toBe(1)
      }
      if (node.name === 'level3') {
        console.log(node.name)
        expect(node.ancestor$.length).toBe(2)
        expect(node.ancestor$[0].value).toBe(1)
        expect(node.ancestor$[1].value).toBe(2)
      }
      // console.log(node.name, node.ancestor$)
    }, { collect_ancestor: true, key_name: 'name' })

    // Tree.walk(tree, node => {
    //   console.log(node.name, node.ancestor$)
    // })

  }

  function find_3(): any {
    let result

    Tree.walk(tree, node => {
      node.value == 3 ? result = node : null
    })

    return result
  }
})
