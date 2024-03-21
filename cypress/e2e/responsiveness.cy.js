describe('This test visibility, texts, sizes, colors at different viewport hights plus its check all options in select, different colors when hovered upon', () => {
    beforeEach(() => {
      cy.visit('https://staging-generator-dusky.vercel.app'); // Replace with your app's URL
    });
  
    it('Checks layout on desktop visibility and font sizes and colors', () => {
      cy.viewport(1920, 1080); // Set viewport to desktop size
     
      cy.get('#maindiv').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('#generate').should('be.visible');
      cy.get('#generateOption').should('be.visible');
      cy.get('#nameDisplay').should('be.visible');
      cy.get('#copyButton').should('be.visible');
      cy.get('#response').should('be.visible');


      cy.get('h1').should('have.text', 'Generátor');
      cy.get('#labelChoose').should('have.text','Vyber si co chceš vygenerovat:' );
      cy.get('#generate').should('have.text', 'Generuj');
      cy.get('#copyButton').should('have.text', 'Copy');

      cy.get('h1').should('have.css', 'font-size', '56px'); // Adjust as per your style
      cy.get('#generate').should('have.css', 'font-size', '22.4px'); // Adjust as per your responsive design
      cy.get('#generateOption').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#nameDisplay').should('have.css', 'font-size', '20.8px'); // Adjust as per your responsive design
      cy.get('#copyButton').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#response').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design

      cy.get('body').should('have.css', 'background-color', 'rgb(26, 26, 26)')
      cy.get('#generate').should('have.css', 'background-color', 'rgb(0, 64, 128)') // Replace with actual RGB value
      cy.get('#generate').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#generateOption').should('have.css', 'color', 'rgb(26, 26, 26)'); // For white text
      cy.get('#nameDisplay').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#copyButton').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text// Add more assertions as needed
      cy.get('#copyButton').should('have.css', 'background-color', 'rgb(76, 175, 80)'); // For white text// Add more assertions as needed

    });

    it('Checks hover state of #generate button', () => {
        cy.viewport(1920, 1080); // Set viewport to desktop size
        cy.get('#generate')
          .trigger('mouseover') // Simulate a hover event
          .should('have.css', 'background-color', 'rgb(0, 64, 128)'); // Replace with the expected color on hover
      
        // You can add more assertions here if needed, like checking text color changes, etc.
      });

    it('Checks hover state of copyButton:hover ', () => {
        cy.viewport(1920, 1080); // Set viewport to desktop size
        cy.get('#copyButton')
          .trigger('mouseover') // Simulate a hover event
          .should('have.css', 'background-color', 'rgb(76, 175, 80)'); // Replace with the expected color on hover
      
        // You can add more assertions here if needed, like checking text color changes, etc.
      });

      it('should change button text from Copy to Copied on click and back', () => {
        // Assert that the button text is initially 'Copy'
        cy.get('#copyButton').should('have.text', 'Copy');
        cy.get('#copyButton').click().should('have.text', 'Copied!');
        cy.wait(2500); // Wait for the duration of the timeout in your JavaScript
        cy.get('#copyButton').should('have.text', 'Copy');

        });
  
    it('Checks layout on mobile visibility and font sizes and colors', () => {
      cy.viewport(393, 852); // iPhone 15 local viewport
      cy.get('#maindiv').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('#generate').should('be.visible');
      cy.get('#generateOption').should('be.visible');
      cy.get('#nameDisplay').should('be.visible');
      cy.get('#copyButton').should('be.visible');
      cy.get('#response').should('be.visible');

      cy.get('h1').should('have.text', 'Generátor');
      cy.get('#labelChoose').should('have.text','Vyber si co chceš vygenerovat:' );
      cy.get('#generate').should('have.text', 'Generuj');
      cy.get('#copyButton').should('have.text', 'Copy');

      cy.get('h1').should('have.css', 'font-size', '48px'); // Adjust as per your responsive design
      cy.get('#generate').should('have.css', 'font-size', '32px'); // Adjust as per your responsive design
      cy.get('#generateOption').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#nameDisplay').should('have.css', 'font-size', '24px'); // Adjust as per your responsive design
      cy.get('#copyButton').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#response').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design

      
      cy.get('body').should('have.css', 'background-color', 'rgb(26, 26, 26)')
      cy.get('#generate').should('have.css', 'background-color', 'rgb(0, 64, 128)') // Replace with actual RGB value
      cy.get('#generate').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#generateOption').should('have.css', 'color', 'rgb(26, 26, 26)'); // For white text
      cy.get('#nameDisplay').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#copyButton').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text// Add more assertions as needed
      cy.get('#copyButton').should('have.css', 'background-color', 'rgb(76, 175, 80)'); // For white text// Add more assertions as needed

    });
  
    it('Checks layout on tablet', () => {
      cy.viewport(820, 1180); // iPad size
      cy.get('#maindiv').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('#generate').should('be.visible');
      cy.get('#generateOption').should('be.visible');
      cy.get('#nameDisplay').should('be.visible');
      cy.get('#copyButton').should('be.visible');
      cy.get('#response').should('be.visible');

      cy.get('h1').should('have.text', 'Generátor');
      cy.get('#labelChoose').should('have.text','Vyber si co chceš vygenerovat:' );
      cy.get('#generate').should('have.text', 'Generuj');
      cy.get('#copyButton').should('have.text', 'Copy');

      cy.get('h1').should('have.css', 'font-size', '56px'); // Adjust as per your style
      cy.get('#generate').should('have.css', 'font-size', '22.4px'); // Adjust as per your responsive design
      cy.get('#generateOption').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#nameDisplay').should('have.css', 'font-size', '20.8px'); // Adjust as per your responsive design
      cy.get('#copyButton').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design
      cy.get('#response').should('have.css', 'font-size', '16px'); // Ad
      cy.get('#response').should('have.css', 'font-size', '16px'); // Adjust as per your responsive design

      
      cy.get('body').should('have.css', 'background-color', 'rgb(26, 26, 26)')
      cy.get('#generate').should('have.css', 'background-color', 'rgb(0, 64, 128)') // Replace with actual RGB value
      cy.get('#generate').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#generateOption').should('have.css', 'color', 'rgb(26, 26, 26)'); // For white text
      cy.get('#nameDisplay').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text
      cy.get('#copyButton').should('have.css', 'color', 'rgb(255, 255, 255)'); // For white text// Add more assertions as needed
      cy.get('#copyButton').should('have.css', 'background-color', 'rgb(76, 175, 80)'); // For white text// Add more assertions as needed

      // Add more assertions specific to mobile layout
    });
  
    it('should contain all expected options in Select', () => {
        cy.get('#generateOption').within(() => {
          cy.get('option').should('have.length', 5); // Checks the total number of options
    
          cy.get('option').eq(0).should('have.value', 'czechPhoneNumber').and('have.text', 'Mobilní číslo');
          cy.get('option').eq(1).should('have.value', 'czechName').and('have.text', 'České jméno');
          cy.get('option').eq(2).should('have.value', 'testEmail').and('have.text', 'Email');
          cy.get('option').eq(3).should('have.value', 'rc').and('have.text', 'Rodné číslo');
          cy.get('option').eq(4).should('have.value', 'englishName').and('have.text', 'Anglické jméno');
        });
      });
  });
  