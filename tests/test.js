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

        it('should display an alert when any button is clicked', () => {
        // Get all buttons on the page
        const buttons = document.querySelectorAll('button');

        // Iterate through each button and simulate a click
        buttons.forEach(button => {
            button.click();
            // Test if the window.alert function has been called
            expect(window.alert).toHaveBeenCalled();
        });
        });
    
    });
  
  });
  
console.log("Test completed.");