const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9pg8pn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
