const { ERROR_TEST_ID } = require('./elements');

class LoginPage {
  verifyErrorMessage(error) {
    return cy.get(ERROR_TEST_ID).should(($h3) => {
      const text = $h3.text();
      const expectedError = error.replace(/"/g, "'");
      expect(text).to.include(`Epic sadface: ${expectedError}`);
    });
  }
}

export default LoginPage;
