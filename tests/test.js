const { JSDOM } = require('jsdom');

console.log("Running test..");
test('Page has a title', () => {
  const html = '<!DOCTYPE html><html><head><title>My Page Title</title></head><body></body></html>';
  const dom = new JSDOM(html);
  const titleElement = dom.window.document.querySelector('title');

  expect(titleElement).not.toBeNull();
});

test('Page has a navigation menu', () => {
  const html = '<!DOCTYPE html><html><head></head><body><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></body></html>';
  const dom = new JSDOM(html);
  const navElement = dom.window.document.querySelector('nav');

  expect(navElement).not.toBeNull();
});

console.log("Test completed.");
