# Cypress JavaScript Test Automation

![Cypress CI](https://github.com/Melisayunis/Cypress-JavaScript-Test-Automation/actions/workflows/cypress.yml/badge.svg)

End-to-end test automation project built with Cypress and JavaScript, focused on validating realistic user flows and demonstrating reusable QA automation practices.

## Project Goals

This project was created to showcase practical QA Automation skills using Cypress with JavaScript.

The main goals are:

- Validate critical user flows
- Cover positive and negative scenarios
- Apply reusable automation patterns
- Integrate test execution into CI
- Execute tests across multiple browsers
- Generate reports and failure evidence

## Tech Stack

- Cypress
- JavaScript
- Node.js
- npm
- ESLint
- Mochawesome
- GitHub Actions

## Test Coverage

Current and planned test areas include:

- Authentication
- User roles and permissions
- Product flows
- Cart behavior
- Checkout flows
- Negative validations
- UI state validation

## Test Strategy

The project uses two main execution groups:

### Smoke Tests

Critical scenarios that validate the most important application functionality.

Examples:
- Successful login
- Critical navigation
- Main business flow availability

### Regression Tests

Complete suite containing all automated scenarios, including smoke coverage and broader validations.

Regression tests run:
- On push to `main`
- Manually from GitHub Actions
- Once per week
- In Chrome and Firefox

## Project Structure 

```text
cypress/
├── e2e/
├── fixtures/
├── pages/
├── selectors/
├── support/
└── utils/
```

### Folder Responsibilities
    - e2e: Test specifications
    - fixtures: Static test data
    - pages: Page Object classes
    - selectors: Centralized element selectors
    - support: Cypress configuration and custom commands
    - utils: Reusable helpers and utilities

# Installation

Clone the repository: 
```bash
git clone https://github.com/Melisayunis/Cypress-JavaScript-Test-Automation.git
```

Install dependencies:

```bash
npm install
```

## Running Tests

Open Cypress:
```bash
npm run cy:open
```

Run all tests in Chrome:
```bash
npm test
```

Run smoke tests:
```bash
npm run test:smoke
```

Run regression tests:
```bash
npm run test:regression
```

Run ESLint:
```bash
npm run lint
```

## CI/CD

GitHub Actions is used for continuous integration.

The pipeline includes:
- ESLint validation
- Smoke test execution on Pull Requests
- Regression execution on `main`
- Weekly scheduled regression
- Manual test execution
- Chrome and Firefox execution
- Report generation
- Screenshots and videos on failure
- Artifact retention
- Concurrency control
- Job timeouts

### CI Flow

```text
Pull Request
    ↓
ESLint
    ↓
Smoke Tests
    ↓
Merge

Push / Merge to main
    ↓
ESLint
    ↓
Regression
    ├── Chrome
    └── Firefox
```

## Manual Execution

GitHub Actions supports manual execution using `workflow_dispatch`.

Available suites:
- Smoke
- Regression

## Reports

Test execution reports are generated using Mochawesome.

The CI pipeline uploads:
- HTML reports
- Screenshots on failure
- Videos on failure

Artifacts are separated by browser for easier debugging.

## Code Quality

ESLint is configured to enforce consistent JavaScript and Cypress coding standards.

The project includes rules for:
- Single quotes
- Semicolons
- Consistent indentation
- `const` usage
- Strict equality
- Consistent code style

## Automation Practices Demonstrated

This project demonstrates:
- Page Object Model
- Centralized selectors
- Reusable utilities
- Fixtures
- Custom Cypress commands
- Retry strategy
- Environment configuration
- Smoke and regression test strategy
- Multi-browser execution
- Automated reporting
- CI/CD integration
- Git workflow with Pull Requests
- Branch protection and required checks

