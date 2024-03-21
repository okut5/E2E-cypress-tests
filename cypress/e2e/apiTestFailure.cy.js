describe('API Failure Simulation', () => {
    beforeEach(() => {
      cy.visit('https://staging-generator-dusky.vercel.app'); // Replace with your app's URL
    });
    it('czech phone number - should handle a simulated API failure ', () => {
      
        // Step 1: Intercept and change the response to a failure status
      cy.intercept('GET', '/api/czechPhoneNumber', {
        statusCode: 500,
        body: { error: 'Internal Server Error' },
      }).as('apiFailure');
      
      cy.get('#generateOption').select('czechPhoneNumber');
      cy.get('#generate').click();
  
      // Step 3: Assert the API call received the failure response
      cy.wait('@apiFailure').its('response.statusCode').should('eq', 500);
  
      // Step 4: Verify how the application handles the failure
    
      cy.get('#nameDisplay').should('have.value', 'Error generating data.');
  
    });
  
    it('czech name - should handle a simulated API failure ', () => {
      
        // Step 1: Intercept and change the response to a failure status
      cy.intercept('GET', '/api/czechName', {
        statusCode: 500,
        body: { error: 'Internal Server Error' },
      }).as('apiFailure');
      
      cy.get('#generateOption').select('czechName');
      cy.get('#generate').click();
  
      // Step 3: Assert the API call received the failure response
      cy.wait('@apiFailure').its('response.statusCode').should('eq', 500);
  
      // Step 4: Verify how the application handles the failure
    
      cy.get('#nameDisplay').should('have.value', 'Error generating data.');
  
    });
  
    it('Email - should handle a simulated API failure ', () => {
      
      // Step 1: Intercept and change the response to a failure status
    cy.intercept('GET', '/api/testEmail', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('apiFailure');
    
    cy.get('#generateOption').select('testEmail');
    cy.get('#generate').click();
  
    // Step 3: Assert the API call received the failure response
    cy.wait('@apiFailure').its('response.statusCode').should('eq', 500);
  
    // Step 4: Verify how the application handles the failure
  
    cy.get('#nameDisplay').should('have.value', 'Error generating data.');
  
  });
  
  it('English name - should handle a simulated API failure ', () => {
      
    // Step 1: Intercept and change the response to a failure status
  cy.intercept('GET', '/api/englishName', {
    statusCode: 500,
    body: { error: 'Internal Server Error' },
  }).as('apiFailure');
  
  cy.get('#generateOption').select('englishName');
  cy.get('#generate').click();
  
  // Step 3: Assert the API call received the failure response
  cy.wait('@apiFailure').its('response.statusCode').should('eq', 500);
  
  // Step 4: Verify how the application handles the failure
  
  cy.get('#nameDisplay').should('have.value', 'Error generating data.');
  
  });
  });
  