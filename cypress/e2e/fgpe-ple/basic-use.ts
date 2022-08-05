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

  cy.intercept(
    "https://python.usz.edu.pl/auth/realms/FGPE/protocol/openid-connect/login-status-iframe.html/init?client_id=fgpe-learning-platform&origin=https%3A%2F%2Fpython.usz.edu.pl"
  ).as("keycloakInit");

  cy.intercept("https://python.usz.edu.pl/auth/realms/FGPE/account").as(
    "keycloakCheck"
  );

  cy.get('[data-cy="login"]').contains("Login").click();

  cy.location().should((loc) => {
    expect(loc.href).to.include("auth");
  });

  cy.get("#email").type("student_fgpe");
  cy.get("#password").type("student123");
  cy.get("form").submit();

  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // cy.wait("@keycloakInit", { timeout: 30000 }).then((interception) => {});
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

And("an exercise should be active", () => {
  cy.get('[data-cy="exercise-button"]').should("have.class", "active");
});

And('the playground status should be equal to "READY"', () => {
  cy.get('[data-cy="status"]').contains("ready", { matchCase: false });
});

When("the student clicks the active language dropdown button", () => {
  cy.get('[data-cy="active-language-dropdown"]').click();
});

Then("the student sees the list of all available programming languages", () => {
  cy.get(".chakra-menu__menu-list").should("be.visible");
});

And('the student clicks the "Python 3" language', () => {
  cy.get('[data-cy="active-language-item"]').contains("Python 3").click();
});

And('the active language button displays the "Python 3" name', () => {
  cy.get('[data-cy="active-language-dropdown"]').contains("span", "Python 3");
});

And("the student submits wrong solution for the first exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });
  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print");
  cy.get('[data-cy="submit"]').click();
  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays an error message for the first exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("WRONG ANSWER", { matchCase: false });
  cy.get("font").contains("Wrong Answer", { matchCase: false });
});

When("the student submits a correct solution for the first exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });

  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print(4 * 2 - 1)");

  cy.get('[data-cy="submit"]').click();

  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays a success message for the first exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("ACCEPT", { matchCase: false });
  cy.get("font").contains("Accepted", { matchCase: false });
});

And(
  'the "Next" button at the bottom right of the first exercise statement should be clickable',
  () => {
    cy.get('[data-cy="next"]').should("not.be.disabled");
  }
);

When("the student clicks the second exercise from the exercise list", () => {
  cy.get('[data-cy="exercise-button"]').eq(1).click();
});

Then("the student waits for the playground to load the second exercise", () => {
  cy.get(".chakra-progress").should("not.exist", { timeout: 10000 });
});

And("the second exercise should be active", () => {
  cy.get('[data-cy="exercise-button"]').eq(1).should("have.class", "active");
});

And("the student enters an incorrect solution for the second exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });

  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print(4324234234 * 463726472)");

  cy.get('[data-cy="submit"]').click();

  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays an error message for the second exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("WRONG ANSWER", { matchCase: false });
  cy.get("font").contains("Wrong Answer", { matchCase: false });
});

When("the student submits a correct solution for the second exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });

  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print(((4+16)/2*(5+15)/2)**0.5)");

  cy.get('[data-cy="submit"]').click();

  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays a success message for the second exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("ACCEPT", { matchCase: false });
  cy.get("font").contains("Accepted", { matchCase: false });
});

When("the student clicks the third exercise from the exercise list", () => {
  cy.get('[data-cy="exercise-button"]').eq(2).click();
});

Then("the student waits for the playground to load the third exercise", () => {
  cy.get(".chakra-progress").should("not.exist", { timeout: 10000 });
});

And("the third exercise should be active", () => {
  cy.get('[data-cy="exercise-button"]').eq(2).should("have.class", "active");
});

And("the student enters an incorrect solution for the third exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });

  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print(2 + 2 + 2 + 2 * 15435)");

  cy.get('[data-cy="submit"]').click();

  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays an error message for the third exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("WRONG ANSWER", { matchCase: false });
  cy.get("font").contains("Wrong Answer", { matchCase: false });
});

When("the student submits a correct solution for the third exercise", () => {
  cy.get('[data-cy="editor-wrapper"]').should("be.visible", { timeout: 5000 });

  cy.get('[data-cy="editor-wrapper"]')
    .wait(500)
    .dblclick()
    .wait(500)
    .focused()
    .clear()
    .type("print(int((4 + 6) / 2))");

  cy.get('[data-cy="submit"]').click();

  cy.get('[data-cy="loading"]').should("not.exist", { timeout: 30000 });
  cy.get('[data-cy="terminal"]').should(
    "not.have.text",
    "Waiting for result...",
    { timeout: 30000 }
  );
});

Then("the terminal displays a success message for the third exercise", () => {
  cy.wait(500);
  cy.get('[data-cy="status"]').contains("ACCEPT", { matchCase: false });
  cy.get("font").contains("Accepted", { matchCase: false });
});

When("the student clicks the fourth exercise from the exercise list", () => {
  cy.get('[data-cy="exercise-button"]').eq(3).click();
});

Then("the student waits for the playground to load the fourth exercise", () => {
  cy.get(".chakra-progress").should("not.exist", { timeout: 10000 });
});

And("the fourth exercise should be active", () => {
  cy.get('[data-cy="exercise-button"]').eq(3).should("have.class", "active");
});

When(
  'the student clicks the "PyCourse PL | ENG" name in the navigation',
  () => {
    cy.get('[data-cy="breadcrumb-link"]').contains("PyCourse PL | ENG").click();
  }
);

Then(
  'the page should display a list of the "PyCourse PL | ENG" game challenges',
  () => {
    cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
      "challengesLoad"
    );
    cy.wait("@challengesLoad", { timeout: 30000 });
    cy.get(".chakra-heading")
      .contains("Challenges")
      .siblings("div")
      .last()
      .children("div");
  }
);

When('the student clicks the "Logout" button in the navigation', () => {
  cy.get('[data-cy="logout"]').click();
});

Then("the page should redirect the user to the homepage", () => {
  cy.url().should("eq", "https://python.usz.edu.pl/learning-platform/");
});
