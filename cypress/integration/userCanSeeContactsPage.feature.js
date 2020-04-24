describe("When there is tasks to be shown", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/tasks",
      response: "fixture:task_index_response.json",
    });
  })
  
  it("user Team Page", () => {
    cy.get("contacts").click();
    cy.get("#team-card").should("contain", "Matthew")
  })

});