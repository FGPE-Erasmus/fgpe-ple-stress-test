const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://python.usz.edu.pl",
  },
  env: {
    KEYCLOAK_CLIENT_ID: "fgpe-learning-platform",
    KEYCLOAK_REALM: "FGPE",
    KEYCLOAK_URL:
      "https://python.usz.edu.pl/auth/realms/FGPE/protocol/openid-connect/auth?client_id=fgpe-learning-platform&redirect_uri=https%3A%2F%2Fpython.usz.edu.pl%2Flearning-platform%2Fprofile&state=44f8fc40-2380-4ed3-86be-ed05a00510fb&response_mode=fragment&response_type=code&scope=openid&nonce=74f9e67e-56c8-443d-9bb1-819888325a26",
    KEYCLOAK_REDIRECT_URI:
      "https://python.usz.edu.pl/learning-platform/profile",
  },
});
