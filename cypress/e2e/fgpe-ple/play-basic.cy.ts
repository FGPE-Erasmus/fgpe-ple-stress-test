import "cypress-keycloak";

describe("open the page", () => {
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
});
