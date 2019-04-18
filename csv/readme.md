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
a3,b3,c3`

parse_csv_string(csv_str) // Alias of parse
   .then(console.log) 
   // Result:
   // [ 
   //   [ 'a1', 'b1', 'c1' ], 
   //   [ 'a2', 'b2', 'c2' ], 
   //   [ 'a3', 'b3', 'c3' ] 
   // ]

const csv_str_with_header =
`H1,H2,H3
a1,b1,c1
a2,b2,c2
a3,b3,c3`

parse_csv_string(csv_str_with_header, {columns: true})
   .then(console.log) 
  // Result:
  // [ 
  //   { H1: 'a1', H2: 'b1', H3: 'c1' },
  //   { H1: 'a2', H2: 'b2', H3: 'c2' },
  //   { H1: 'a3', H2: 'b3', H3: 'c3' } 
  // ]
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
  .then(console.log) 
  // Result:
  // [ 
  //   [ 'a1', 'b1', 'c1' ], 
  //   [ 'a2', 'b2', 'c2' ], 
  //   [ 'a3', 'b3', 'c3' ] 
  // ]
```

### Use different delimiter other than `,`

```js
const csv_str =
`a1|b1|c1
a2|b2|c2
a3|b3|c3`

parse_csv_string(csv_str, {delimiter: '|'})
   .then(console.log) 
   // Result:
   // [ 
   //   [ 'a1', 'b1', 'c1' ], 
   //   [ 'a2', 'b2', 'c2' ], 
   //   [ 'a3', 'b3', 'c3' ] 
   // ]
```

## Available options

```js
{
    /**
     * If true, detect and exclude the byte order mark (BOM) from the CSV input if present.
     */
    bom?: boolean;
    /**
     * If true, the parser will attempt to convert input string to native types.
     * If a function, receive the value as first argument, a context as second argument and return a new value. More information about the context properties is available below.
     */
    cast?: boolean | CastingFunction;
    /**
     * If true, the parser will attempt to convert input string to dates.
     * If a function, receive the value as argument and return a new value. It requires the "auto_parse" option. Be careful, it relies on Date.parse.
     */
    cast_date?: boolean | CastingDateFunction;
    /**
     * List of fields as an array,
     * a user defined callback accepting the first line and returning the column names or true if autodiscovered in the first CSV line,
     * default to false,
     * affect the result data set in the sense that records will be objects instead of arrays.
     */
    columns?: any[] | boolean | ((record: any) => boolean | string[]);
    /**
     * Treat all the characters after this one as a comment, default to '' (disabled).
     */
    comment?: string;
    /**
     * Set the field delimiter. One character only, defaults to comma.
     */
    delimiter?: string | Buffer;
    /**
     * Set the escape character, one character only, defaults to double quotes.
     */
    escape?: string | Buffer;
    /**
     * Start handling records from the requested number of records.
     */
    from?: number;
    /**
     * Start handling records from the requested line number.
     */
    from_line?: number;
    /**
     * Generate two properties `info` and `record` where `info` is a snapshot of the info object at the time the record was created and `record` is the parsed array or object.
     */
    info?: boolean;
    /**
     * If true, ignore whitespace immediately following the delimiter (i.e. left-trim all fields), defaults to false.
     * Does not remove whitespace in a quoted field.
     */
    ltrim?: boolean;
    /**
     * Maximum numer of characters to be contained in the field and line buffers before an exception is raised,
     * used to guard against a wrong delimiter or record_delimiter,
     * default to 128000 characters.
     */
    max_record_size?: number;
    /**
     * Name of header-record title to name objects by.
     */
    objname?: string;
    /**
     * Optional character surrounding a field, one character only, defaults to double quotes.
     */
    quote?: string | boolean | Buffer;
    /**
     * Generate two properties raw and row where raw is the original CSV row content and row is the parsed array or object.
     */
    raw?: boolean;
    /**
     * Preserve quotes inside unquoted field.
     */
    relax?: boolean;
    /**
     * Discard inconsistent columns count, default to false.
     */
    relax_column_count?: boolean;
    /**
     * One or multiple characters used to delimit record rows; defaults to auto discovery if not provided.
     * Supported auto discovery method are Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
     */
    record_delimiter?: string | string[] | Buffer | Buffer[];
    /**
     * If true, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields), defaults to false.
     * Does not remove whitespace in a quoted field.
     */
    rtrim?: boolean;
    /**
     * Dont generate empty values for empty lines.
     * Defaults to true
     */
    skip_empty_lines?: boolean;
    /**
     * Skip a line with error found inside and directly go process the next line.
     */
    skip_lines_with_error?: boolean;
    /**
     * Don't generate records for lines containing empty column values (column matching /\s*\/), defaults to false.
     */
    skip_lines_with_empty_values?: boolean;
    /**
     * Stop handling records after the requested number of records.
     */
    to?: number;
    /**
     * Stop handling records after the requested line number.
     */
    to_line?: number;
    /**
     * If true, ignore whitespace immediately around the delimiter, defaults to false.
     * Does not remove whitespace in a quoted field.
     * Default to true.
     */
    trim?: boolean;
}
```

## Development
```bash
npm i # Install.
npm t # Run test first.
npm start # Start development.
``` 
