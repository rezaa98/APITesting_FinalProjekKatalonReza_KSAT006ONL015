# How TO Run Cypress

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Run Cypress With Syntax

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-todomvc.git

## cd into the cloned repo
cd cypress-example-todomvc

## install the node_modules
npm install

## start the local webserver
node ./node_modules/cypress/bin/cypress open
```

The `npm start` script will spawn a webserver on port `8888` 

You can verify this by opening your browser and navigating to: [`http://localhost:8888`](http://localhost:8888)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

## Cypress IntelliSense

If you use modern IDE that supports TypeScript (like VSCode), you can benefit
from Cypress type declarations included with the `cypress` NPM module. Just
add `@ts-check` to the spec file and configure "dummy"
[tsconfig.json](tsconfig.json) file and see IntelliSense over `cy.<something>`
commands.

![cy.type IntelliSense](img/cytype.png)

### Custom commands

This project also adds several custom commands in [cypress/support/commands.js](cypress/support/commands.js). They are useful to create one or more default todos from the tests.

```js
it('should append new items to the bottom of the list', function () {
  cy.createDefaultTodos().as('todos')
  // more test commands
})
```

To let TypeScript compiler know that we have added a custom command and have IntelliSense working, I have described the type signature of the custom command in file [cypress/support/index.d.ts](cypress/support/index.d.ts). Here is how this file looks; the type signatures should match the arguments custom commands expect.

```typescript
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    createDefaultTodos(): Chainable<any>
    /**
     * Creates one Todo using UI
     * @example
     * cy.createTodo('new item')
     */
    createTodo(title: string): Chainable<any>
  }
}
```

To include the new ".d.ts" file into IntelliSense, I could update `tsconfig.json` or I could add another special comment to the JavaScript spec files - `/// <reference types="...>`.

```js
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
// will resolve to "cypress/support/index.d.ts"
/// <reference types="../support" />
```

**Related:** [IntelliSense for custom Chai assertions added to Cypress](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/extending-cypress__chai-assertions#code-completion)

## Support

If you find errors in the type documentation, please
[open an issue](https://github.com/cypress-io/cypress/issues)

