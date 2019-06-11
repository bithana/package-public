import { Constraint_tree } from './constraint'
import { Tree } from './tree'

let tree: Constraint_tree

beforeEach(() => {
  tree = {
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

})

it('down', async () => {

  expect(find_3().value).toBe(3)
  right_ancestor()

  function right_ancestor() {
    Tree.down(tree, node => {
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
    }, { flat_ancestor: true, key_name: 'name' })

    // Tree.walk(tree, node => {
    //   console.log(node.name, node.ancestor$)
    // })

  }

  function find_3(): any {
    let result

    Tree.down(tree, node => {
      node.value == 3 ? result = node : null
    }, { child_name: 'child$' })

    return result
  }
})

it('up', async () => {
  Tree.set_parent(tree, { child_name: 'child$' })

  // dump(tree)
  Tree.up(tree.child$.level2.child$.level3, node => {
    if (node.value == 2) {
      console.log(1)
      expect(node.parent.value).toBe(1)
    }
    if (node.value == 3) {
      console.log(2)
      expect(node.parent.value).toBe(2)
    }
  }, { child_name: 'child$' })
})
