import "cypress-keycloak";

describe("empty spec", () => {
  beforeEach(() => {
    cy.login({
      root: Cypress.env().KEYCLOAK_URL,
      realm: Cypress.env().KEYCLOAK_REALM,
      username: "student_fgpe",
      password: "student123",
      client_id: Cypress.env().KEYCLOAK_CLIENT_ID,
      redirect_uri: Cypress.env().KEYCLOAK_REDIRECT_URI,
    });
  });

  it("passes", () => {
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
  });

  it("passes", () => {
    cy.get(
      "#root > div > div.css-1ivj9an > div > div.css-1hhprfr > div:nth-child(1) > a > button"
    ).click();
  });

  it("passes", () => {
    cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
      "initialGames"
    );
    cy.wait("@initialGames");
  });

  // it("passes", () => {
  //   cy.get("input").type("PyCourse PL | ENG");
  // });
});

// describe("Renders login, a user clicks login", () => {
//   it("passes", () => {
//     cy.get("button").contains("Login").click();
//   });
// });

// describe("Redirected to login", () => {
//   it("passes", () => {
//     cy.location().should((loc) => {
//       expect(loc.href).to.include("auth");
//     });
//   });
// });

// describe("clicks login", () => {
//   it("passes", () => {
//     cy.get("#email").type("student_fgpe");
//     cy.get("#password").type("student123").wait(1000).type("{enter}");
//     // cy.get(
//     //   "body > div.kccontainer > div.kcinner.container-fluid > div > div > div.kcform > form > div:nth-child(3) > div > div > div.flex > input"
//     // );
//   });
// });

// describe("Keycloak initialized", () => {
//   it("passes", () => {
//     // cy.get('.chakra-progress').should('be.visible');
//     // cy.get('.chakra-progress').should('not.be.visible');
//     cy.intercept(
//       "https://python.usz.edu.pl/auth/realms/FGPE/protocol/openid-connect/login-status-iframe.html/init?client_id=fgpe-learning-platform&origin=https%3A%2F%2Fpython.usz.edu.pl"
//     ).as("keycloakInit");

//     cy.wait("@keycloakInit");
//   });
// });

// describe("Keycloak account check", () => {
//   it("passes", () => {
//     // cy.get('.chakra-progress').should('be.visible');
//     // cy.get('.chakra-progress').should('not.be.visible');

//     cy.intercept("https://python.usz.edu.pl/auth/realms/FGPE/account").as(
//       "keycloakCheck"
//     );
//     cy.on("uncaught:exception", (err, runnable) => {
//       return false;
//     });

//     cy.wait("@keycloakCheck");
//   });
// });

// describe("Visit profile", () => {
//   it("passes", () => {
//     cy.get(
//       "#root > div > div.css-1ivj9an > div > div.css-1hhprfr > div:nth-child(1) > a > button"
//     ).click();
//   });
// });

// describe("Initial games load", () => {
//   it("passes", () => {
//     cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
//       "initialGames"
//     );
//     cy.wait("@initialGames");
//   });
// });
