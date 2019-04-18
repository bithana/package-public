# Simple CSV Parser

## Project Information
- Main problem this package solves: Parse csv easily.
- Main language: Typescript.

## Getting started

### Parse csv string

```js
const csv_str =
`a1,b1,c1
a2,b2,c2
a3,b3,c3
`
parse_csv_string(csv_str) // Alias of parse
   .then(console.log) // [ [ 'a1', 'b1', 'c1' ], [ 'a2', 'b2', 'c2' ], [ 'a3', 'b3', 'c3' ] ]
```

### Parse csv file

**file.csv**
```csv
a1,b1,c1
a2,b2,c2
a3,b3,c3
```

```js
parse_csv_file('path/to/file.scv')
  .then(console.log) // [ [ 'a1', 'b1', 'c1' ], [ 'a2', 'b2', 'c2' ], [ 'a3', 'b3', 'c3' ] ]
```

### Use different delimiter other than `,`

```js
const csv_str =
`a1|b1|c1
a2|b2|c2
a3|b3|c3
`
parse_csv_string(csv_str, {delimiter: '|'})
   .then(console.log) // [ [ 'a1', 'b1', 'c1' ], [ 'a2', 'b2', 'c2' ], [ 'a3', 'b3', 'c3' ] ]
```

## Development
```bash
npm i # Install.
npm t # Run test first.
npm start # Start development.
``` 
