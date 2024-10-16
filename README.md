# Workflow Course Assignment

**Course**: Workflow  
**Date**: October, 2024

## Overview

This project is a fork of an existing application, aimed to improve the quality of by implementing various development workflows and creating a comprehensive testing strategy. This will include configuring tools, identifying bugs, and creating tests.

## Goals

The primary objectives of this assignment are:

-   To create a development environment.
-   To configure essential tools for code quality and testing.
-   To establish a thorough testing strategy that includes both unit and end-to-end tests.

## Features

-   ESLint & Prettier: Integrated linting and code formatting with ESLint and Prettier to enforce consistent code style.
-   Cypress for E2E Testing: E2E tests are handled with Cypress for simulating real-world user interactions.
-   Jest for Unit Testing: Unit tests are written and run using Jest.
-   Husky: Git hooks are managed by Husky for ensuring pre-commit code quality.
-   Automated Testing: This project uses automated testing for both unit tests and E2E tests.

## Workflow Status Badges

[![Automated Unit Testing](https://github.com/AnnaAaBrekke/ca-workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/AnnaAaBrekke/ca-workflow/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/AnnaAaBrekke/ca-workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/AnnaAaBrekke/ca-workflow/actions/workflows/e2e-test.yml)

## Prerequisites

To set up the project, you will need:

-   Node.js (version 18+)
-   npm (version 7+)
-   Git

## Getting Started

# Clone the Repository

`bash`
git clone https://github.com/AnnaAaBrekke/ca-workflow.git
cd ca-workflow
`bash`

# Install Dependencies

`bash`
npm install
`bash`

# Available Scripts

In the project directory, you can run the following commands:

-   Start Development Server: Automatically compiles Sass and serves the app with live reloading.
    `bash`
    npm start
    `bash`
-   Run Unit Tests: Execute unit tests using Jest.
    `bash`
    npm run test-unit
    `bash`
-   Run E2E Tests (with Cypress GUI): Open Cypress in the interactive mode to run end-to-end tests.
    `bash`
    npm run test-e2e
    `bash`
-   Run E2E Tests (Headless): Run Cypress E2E tests in the terminal without opening the Cypress UI.
    `bash`
    npm run test-e2e-cli
    `bash`
-   Run All Tests: Run both unit and E2E tests in sequence.
    `bash`
    npm test
    `bash`
-   Lint the Code: Run ESLint to check for code quality and style issues.
    `bash`
    npm run lint
    `bash`
-   Format Code: Run Prettier to format the code based on predefined rules.
    `bash`
    npm run format
    `bash`

# Setting Up Husky

-   Husky is already configured to run linting and testing before commits. To ensure it's working:
    `bash`
    npm run prepare
    `bash`
    This will set up the Husky hooks in your local environment.
