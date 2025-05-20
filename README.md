# Famaga-Cypress

# This is a test project with end-to-end tests for the EnFuego project

# tests are added in BDD - Cucumber/ with Typescript

# Test runs examples

# Single spec running in a headless mode in Chrome browser- yarn cypress run --spec "cypress/e2e/Signin/Signin.feature" --headless --browser chrome

# All tests running in a headless mode in chrome browser- yarn cypress run --headless --browser chrome

# All tests running in a headed mode in chrome browser - yarn cypress run --headed --browser chrome

# Single spec running in a headed mode in chrome browser - yarn cypress run --spec "cypress/e2e/Signin/Signin.feature" --headed --browser chrome

# Cypress latest install - yarn add -D cypress@latest

# for opening the new cypress app- yarn cypress open

# running one particular feature file with the chosen tag in Chrome browser - yarn cypress run --env TAGS='@smoke' --spec "cypress/e2e/Signin/Signin.feature" --headless --browser chrome

# running all tests features with the particular tag in chrome browser - For example - yarn cypress run --env TAGS='@smoke' --headless --browser chrome
