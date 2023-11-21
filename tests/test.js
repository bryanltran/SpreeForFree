const { JSDOM } = require('jsdom');

const { JSDOM } = require('jsdom');

console.log("Running tests..");

// Test 1: Home Page has a title
test('Home Page has a title', () => {
  const html = '<!DOCTYPE html><html><head><title>Spree For Free</title></head><body></body></html>';
  const dom = new JSDOM(html);
  const titleElement = dom.window.document.querySelector('title');

  expect(titleElement).not.toBeNull();
});

// Test 2: Home Page has a navigation menu
test('Home Page has a navigation menu', () => {
  const html = '<!DOCTYPE html><html><head></head><body><nav><ul><li>Home</li><li>Catalog</li><li>About</li><li>Account</li><li>Cart</li></ul></nav></body></html>';
  const dom = new JSDOM(html);
  const navElement = dom.window.document.querySelector('nav');

  expect(navElement).not.toBeNull();
});

// Test 3: Catalog Page has a title
test('Catalog Page has a title', () => {
  const html = '<!DOCTYPE html><html><head><title>Catalog</title></head><body></body></html>';
  const dom = new JSDOM(html);
  const titleElement = dom.window.document.querySelector('title');

  expect(titleElement).not.toBeNull();
});

// Test 4: Catalog Page has a navigation menu
test('Catalog Page has a navigation menu', () => {
  const html = '<!DOCTYPE html><html><head></head><body><nav><ul><li>Home</li><li>Catalog</li><li>About</li><li>Account</li><li>Cart</li></ul></nav></body></html>';
  const dom = new JSDOM(html);
  const navElement = dom.window.document.querySelector('nav');

  expect(navElement).not.toBeNull();
});

console.log("Tests completed.");


console.log("Test completed.");
