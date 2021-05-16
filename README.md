# Automation test suite to test Login functionality

# Description

Automation framework to perform Login functionality testing for https://www.saucedemo.com/ web page using Cypress, Gherkin, and page object pattern.

### Set Up

Clone and install:

```bash
git clone https://github.com/Chaithanya729/login-automation.git
cd login-automation
npm install
```


### Running the Application

Run it using:

```bash
npm run cypress:open
```

- And cypress app will run in your local system

### Other Commands

- **npm test**: Executes all tests that have the `.feature` extension
- **npm test:chrome**: Executes all tests in chrome browser


### Project Structure

    .
    ├── cypress                     # Cypress folder
        ├── fixtures                # for storing static data files
        ├── integration             # consists test files
        ├── plugins                 # plugins folder
        ├── support                 # reusable helper files
        ├── video                   # stores recordings of test executions
        └── screenshots             # screenshots of tests

### A typical Page Object Model/Gherkin pattern
    .
    ├── integration                 # Cypress integration folder
        ├── features                # All feature files 
        └── pages                   # All page object files

## Files that I created

### cypress: (/integration)

### /features

 - `login.feature` consists of all scenarios that are required to perform the tests for login functionality. 
 - `login/login.js` consists of step definitions that map the test case steps of login.feature

### /pages

 This folder consists of page objects and page functions

- `LoginPage` **LoginPage.js** consist of methods for LoginPage and **elements.js** consist of all page objects.

### cypress: (/support)

### /constants

 Storing all string constants

### /commands

 - `login` is a custom cypress command method that takes username and password as arguments and fill the inputs and clicks login button and available on **cy.login()**

 - `logout`  is a custom cypress command that let users logout of application and available on **cy.logout**.

### Future Enhancements
- Gain in depth knowledge in cypress and learn best practices and improve performance of tests by exploring **cy.request()**
- Continuos integration using circle ci or any ci tools
- Dockerising all packages
- Test reports integration