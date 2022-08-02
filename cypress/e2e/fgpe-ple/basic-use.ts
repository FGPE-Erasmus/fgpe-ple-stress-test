import {
  When,
  Then,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("the student is signed in", () => {
  cy.visit("/", {
    onBeforeLoad(win) {
      Object.defineProperty(win.navigator, "language", { value: "en-US" });
      Object.defineProperty(win.navigator, "languages", { value: ["en"] });
      Object.defineProperty(win.navigator, "accept_languages", {
        value: ["en"],
      });
    },
    headers: {
      "Accept-Language": "en",
    },
  });

  cy.get("button").contains("Login").click();

  cy.location().should((loc) => {
    expect(loc.href).to.include("auth");
  });

  cy.get("#email").type("student_fgpe");
  cy.get("#password").type("student123");
  cy.get("form").submit();

  cy.intercept(
    "https://python.usz.edu.pl/auth/realms/FGPE/protocol/openid-connect/login-status-iframe.html/init?client_id=fgpe-learning-platform&origin=https%3A%2F%2Fpython.usz.edu.pl"
  ).as("keycloakInit");

  cy.intercept("https://python.usz.edu.pl/auth/realms/FGPE/account").as(
    "keycloakCheck"
  );
  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  cy.wait("@keycloakInit", { timeout: 30000 });

  cy.wait("@keycloakCheck", { timeout: 30000 });
});

And('a publicly available Python 3 game named "PyCourse PL | ENG"', () => {
  cy.get('input[placeholder="Awesome game"]').type("PyCourse PL | ENG");
  cy.get("td")
    .contains("Python Course - Polish and English version (12 Lessons)")
    .siblings("td")
    .contains("button", /You're assigned|Assign me/)
    .then(($btn) => {
      if ($btn.is(":disabled")) {
        return;
      } else {
        cy.wrap($btn).click();
      }
    });
});

And('the student is assigned to the "PyCourse PL | ENG" game', () => {
  cy.get("td")
    .contains("Python Course - Polish and English version (12 Lessons)")
    .siblings("td")
    .contains("button", "You're assigned", { timeout: 3000 });
});

When('the student clicks on the "PyCourse PL | ENG" game', () => {
  cy.get(".chakra-heading")
    .contains("PyCourse PL | ENG")
    .siblings("div")
    .contains("Python Course - Polish and English version (12 Lessons)")
    .parent()
    .parent()
    .parent()
    .parent()
    .click();
});

Then("the page should display the game challenges", () => {
  cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
    "challengesLoad"
  );
  cy.wait("@challengesLoad", { timeout: 30000 });
  cy.get(".chakra-heading")
    .contains("Challenges")
    .siblings("div")
    .last()
    .children("div");
});

And('one of the game challenges should be named "Lesson 1"', () => {
  cy.get(".chakra-heading")
    .contains("Challenges")
    .siblings("div")
    .last()
    .children("div")
    .contains("a", "Lesson 1");
});

When('the student clicks on the "Lesson 1" challenge', () => {
  cy.get(".chakra-heading")
    .contains("Challenges")
    .siblings("div")
    .last()
    .children("div")
    .contains("a", "Lesson 1")
    .click();
});

Then("the page should display the playground", () => {
  cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
    "challengeLoad"
  );
  cy.wait("@challengeLoad", { timeout: 30000 });

  cy.get(".editor-wrapper");
  cy.get(".monaco-editor");
});

/** TODO */
And("the first unsolved exercise should be active", () => {});
