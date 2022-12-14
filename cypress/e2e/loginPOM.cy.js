/// <reference types="Cypress"/>

import  { loginPage } from "../page_objects/loginPage";

describe("login test", () => {
    before("visit vivify scrum", () => {
      cy.visit("/");
      loginPage.loginButton.click();
      loginPage.loginHeading
        .should("be.visible")
        .and("have.text", "Please login");
    })