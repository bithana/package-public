import { print } from './index'

it('should print deep object', () => {
  print({
    a: {
      b: {
        c: {
          d: {},
        },
      },
    },
  })
})
