describe('API Testing', () => {
    it('tests the name generator API', () => {
        cy.request('GET', 'http://staging-generator-dusky.vercel.app/api/czechPhoneNumber').then((response) => {
          expect(response.status).to.eq(200);
          // Additional assertions about the response body can be added here
        });
      });

    it('tests the name generator API', () => {
        cy.request('GET', 'http://staging-generator-dusky.vercel.app/api/czechName').then((response) => {
          expect(response.status).to.eq(200);
          // Additional assertions about the response body can be added here
        });
      });
    
    it('tests the name generator API', () => {
        cy.request('GET', 'http://staging-generator-dusky.vercel.app/api/testEmail').then((response) => {
          expect(response.status).to.eq(200);
          // Additional assertions about the response body can be added here
        });
      });

    it('tests the name generator API', () => {
        cy.request('GET', 'http://staging-generator-dusky.vercel.app/api/englishName').then((response) => {
          expect(response.status).to.eq(200);
          // Additional assertions about the response body can be added here
        });
      });
  });
  