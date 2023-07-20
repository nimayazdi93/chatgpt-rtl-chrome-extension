// Create a <style> element
const styleElement = document.createElement('style');

// Define the CSS styles
const cssStyles = `
  p {
   direction:rtl
  }
  span{
    direction:rtl
  }
  input{
    direction:rtl
  }
  textarea{
    direction:rtl
  }
`;

// Set the CSS styles as the content of the <style> element
styleElement.innerHTML = cssStyles;

// Append the <style> element to the document's <head>
document.head.appendChild(styleElement);