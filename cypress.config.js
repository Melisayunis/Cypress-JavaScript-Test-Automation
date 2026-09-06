const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://qademo.com',

        specPattern: 'cypress/e2e/**/*.cy.js',

        excludeSpecPattern: [
            '**/*.skip.cy.js'
        ],

        viewportWidth: 1440,
        viewportHeight: 900,

        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        responseTimeout: 30000,
        pageLoadTimeout: 60000,

        retries: {
            runMode: 1,
            openMode: 0
        },

        screenshotOnRunFailure: true,
        video: true,

        env: {
            environment: 'qa',
        },

        reporter: 'cypress-mochawesome-reporter',

        reporterOptions: {
            reportDir: 'cypress/reports',
            charts: true,
            reportPageTitle: 'Cypress Automation Report',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false
        },

        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);

            return config;
        }
    }
});

