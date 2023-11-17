const { JSDOM } = require('jsdom');

console.log("Running test..");
test('Page has a title', () => {
  const html = '<!DOCTYPE html><html><head><title>My Page Title</title></head><body></body></html>';
  const dom = new JSDOM(html);
  const titleElement = dom.window.document.querySelector('title');

  expect(titleElement).not.toBeNull();
});


console.log("Test completed.");
