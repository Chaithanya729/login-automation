const {
  USERNAME_INPUT_TEST_ID,
  PASSWORD_INPUT_TEST_ID,
  LOGIN_BTN_TEST_ID,
  MENU_BTN_ID,
  LOGOUT_LINK_ID,
} = require('../integration/pages/LoginPage/elements');

Cypress.Commands.add('login', (username, password) => {
  // type username
  cy.get(USERNAME_INPUT_TEST_ID)
    .clear()
    .then((e) => {
      if (username !== '') cy.wrap(e).type(username);
    });
  // type password
  cy.get(PASSWORD_INPUT_TEST_ID)
    .clear()
    .then((e) => {
      if (password !== '') cy.wrap(e).type(password);
    });
  // click login button
  cy.get(LOGIN_BTN_TEST_ID).click();
});

Cypress.Commands.add('logout', () => {
  // click burger menu
  cy.get(MENU_BTN_ID).click();
  // click logout link
  cy.get(LOGOUT_LINK_ID).click();
});
