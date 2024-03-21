describe('E2E test of all functions', () => {
    beforeEach(() => {  
      cy.visit ('https://staging-generator-dusky.vercel.app');
    
    })

  it('czechPhoneNumber', () => {
    cy.viewport(1920, 1080); // Set viewport to desktop size
    cy.intercept('GET', '/api/czechPhoneNumber').as('generateCzechPhoneNumber');
    cy.get('#generateOption').select('czechPhoneNumber');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateCzechPhoneNumber').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
      // The next line should be inside the .then() function
    cy.get('#nameDisplay').invoke('val').then((czechPhoneNumber) => {
        expect(czechPhoneNumber.trim()).to.match(/^420[67]\d{8}$/); // Check the phone number format
    });
    cy.get('#nameDisplay').should('be.visible');
    cy.get('#copyButton').click();
    }); // Close the .then() function here
  });

  it('czechName', () => {
    cy.viewport(1920, 1080); // Set viewport to desktop size
    cy.intercept('GET', '/api/czechName').as('generateCzechName');
    cy.get('#generateOption').select('czechName');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateCzechName').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
    });
      // Assuming the name is displayed in an element with ID 'nameDisplay'
      cy.get('#nameDisplay').invoke('val').then((czechName) => {
        // Split the name by spaces and check if it has two parts
        const nameParts = czechName.trim().split(' ');
        expect(nameParts.length).to.eq(2);
      });
      cy.get('#nameDisplay').should('be.visible');
      cy.get('#copyButton').click();
    });
 

  it('testEmail', () => {
    cy.viewport(1920, 1080); // Set viewport to desktop size
    cy.intercept('GET', '/api/testEmail').as('generateTestEmail');
    cy.get('#generateOption').select('testEmail');
      cy.get('#generate').click();
      cy.wait(2500); // wait for 1 second
      cy.wait('@generateTestEmail').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); // Check the status code
        });
          // The next line should be inside the .then() function
         // Assuming the email is displayed in an element with ID 'emailDisplay'
      cy.get('#nameDisplay').invoke('val').then((email) => {
        // Regular expression to validate standard email format
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          expect(email).to.match(emailRegex);
        });
        
      cy.get('#nameDisplay').should('be.visible');
      cy.get('#copyButton').click();
      }); // Close the .then() function here

  
  it('englishName', () => {
    cy.viewport(1920, 1080); // Set viewport to desktop size
    cy.intercept('GET', '/api/englishName').as('generateEnglishName');
    cy.get('#generateOption').select('englishName');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateEnglishName').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
    });
    // Assuming the name is displayed in an element with ID 'nameDisplay'
    cy.get('#nameDisplay').invoke('val').then((czechName) => {
      // Split the name by spaces and check if it has two parts
      const nameParts = czechName.trim().split(' ');
      expect(nameParts.length).to.eq(2);
    });
    cy.get('#nameDisplay').should('be.visible');

    cy.get('#copyButton').click();
  });

  //TADY JSOU STEJNÉ TESTY ALE PRO MOBILNÍ ZAŘÍZENÍ

  it('czechPhoneNumber', () => {
    cy.viewport(393, 852); // iPhone 15 local viewport
    cy.intercept('GET', '/api/czechPhoneNumber').as('generateCzechPhoneNumber');
    cy.get('#generateOption').select('czechPhoneNumber');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateCzechPhoneNumber').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
      // The next line should be inside the .then() function
    cy.get('#nameDisplay').invoke('val').then((czechPhoneNumber) => {
        expect(czechPhoneNumber.trim()).to.match(/^420[67]\d{8}$/); // Check the phone number format
    });
    cy.get('#nameDisplay').should('be.visible');
    cy.get('#copyButton').click();
    }); // Close the .then() function here
  });

  it('czechName', () => {
    cy.viewport(393, 852); // iPhone 15 local viewport
    cy.intercept('GET', '/api/czechName').as('generateCzechName');
    cy.get('#generateOption').select('czechName');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateCzechName').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
    });
      // Assuming the name is displayed in an element with ID 'nameDisplay'
      cy.get('#nameDisplay').invoke('val').then((czechName) => {
        // Split the name by spaces and check if it has two parts
        const nameParts = czechName.trim().split(' ');
        expect(nameParts.length).to.eq(2);
      });
      cy.get('#nameDisplay').should('be.visible');
  
      cy.get('#copyButton').click();
    });
 

  it('testEmail', () => {
    cy.viewport(393, 852); // iPhone 15 local viewport
    cy.intercept('GET', '/api/testEmail').as('generateTestEmail');
    cy.get('#generateOption').select('testEmail');
      cy.get('#generate').click();
      cy.wait(2500); // wait for 1 second
      cy.wait('@generateTestEmail').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); // Check the status code
        });
          // The next line should be inside the .then() function
         // Assuming the email is displayed in an element with ID 'emailDisplay'
      cy.get('#nameDisplay').invoke('val').then((email) => {
        // Regular expression to validate standard email format
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          expect(email).to.match(emailRegex);
        });
      cy.get('#nameDisplay').should('be.visible');
  
      cy.get('#copyButton').click();
      }); // Close the .then() function here

  
  it('englishName', () => {
    cy.viewport(393, 852); // iPhone 15 local viewport
    cy.intercept('GET', '/api/englishName').as('generateEnglishName');
    cy.get('#generateOption').select('englishName');
    cy.get('#generate').click();
    cy.wait(2500); // wait for 1 second
    cy.wait('@generateEnglishName').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Check the status code
    });
    // Assuming the name is displayed in an element with ID 'nameDisplay'
    cy.get('#nameDisplay').invoke('val').then((czechName) => {
      // Split the name by spaces and check if it has two parts
      const nameParts = czechName.trim().split(' ');
      expect(nameParts.length).to.eq(2);
    });

    cy.get('#nameDisplay').should('be.visible');
    cy.get('#copyButton').click();
  });


})