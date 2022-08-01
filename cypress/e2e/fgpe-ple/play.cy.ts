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
    cy.visit("/learning-platform/profile", {
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
    cy.get(
      "#root > div > div.css-1ivj9an > div > div.css-1hhprfr > div:nth-child(1) > a > button"
    ).click();
    cy.intercept("https://python.usz.edu.pl/gamification-service/graphql").as(
      "initialGames"
    );
    cy.wait("@initialGames");
  });
});
