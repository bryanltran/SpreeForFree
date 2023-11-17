console.log("Running test..");

document.addEventListener('DOMContentLoaded', () => {
    
    
    describe('Automated Website Tests', () => {
    
        it('Page should have a title', () => {
        expect(document.title).toBeTruthy();
        });

        it('Page should have the Navigation Bar', () => {
        const navMenu = document.getElementById('navbar');
        expect(navMenu).toBeTruthy();
        });
    
    });
  
  });
  
console.log("Test completed.");