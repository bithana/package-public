# Better error management

Extend base class to use this library

```typescript
/**
 * My custom base error
 */
export class Invalid_api_input extends Caller_fault {}

/**
 * A specific error based on previous one
 */
export class Invalid_signature extends Invalid_api_input {
  constructor(
    title = 'Invalid API signature',
    solution = 'You can use our SDK to generate signature easily, or read about signature here: http://...'
  ) { super(title, solution) }
}

/**
 * Using option object
 */
export class Invalid_parameter extends Invalid_api_input {
  constructor(
    title = 'Invalid API parameter <...>',
    solution = '...'
  ) { super({title, solution, level: 'public'}) }
}


```
