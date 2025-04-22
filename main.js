

console.log(elementsWithGreenColor);// Select all elements with the computed CSS color "green"
const elementsWithGreenColor = Array.from(document.querySelectorAll('*')).filter(element => {
  return window.getComputedStyle(element).color === 'rgb(0, 128, 0)'; // "green" in RGB
});

console.log(elementsWithGreenColor);