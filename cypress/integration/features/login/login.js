import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage/LoginPage';
import constants from '../../../support/constants';

const loginPage = new LoginPage();

Given('User navigates to saucedemo.com', () => {
  cy.visit('/');
  cy.title().should('eq', constants.PAGE_TITLE);
});

When(
  'User login with username as {string} and password as {string}',
  (username, password) => {
    cy.login(username, password);
  }
);

When('User try to visit inventory page without login', () => {
  cy.visit(constants.INVENTORY_PAGE_PATH, { failOnStatusCode: false });
});

Then(`Users sees a validation {string}`, (error) => {
  loginPage.verifyErrorMessage(error);
});

Then('User redirects to /inventory on success', () => {
  cy.url().should('include', constants.INVENTORY_PAGE_PATH);
});

And('User logout', () => {
  cy.logout();
});

And('User click browser back button to access inventory page', () => {
  cy.go('back');
});

And('Our cookie is set to {string}', (cookie) => {
  // to prove we have a session
  cy.getCookie(cookie).should('exist');
});
