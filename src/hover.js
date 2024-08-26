// hover.js

// Interaction between the cursor and the links
const Hoverable = document.querySelectorAll('.Hoverable');
const Default_root = document.querySelector('.Default_root');

if (Default_root) {
  Hoverable.forEach(element => {
    element.addEventListener('mouseenter', () => {
      console.log('ENTER');
      Default_root.classList.add('Default_isHover');
      document.documentElement.style.setProperty('--scale', 1.625);
    });

    element.addEventListener('mouseleave', () => {
      Default_root.classList.remove('Default_isHover');
      document.documentElement.style.setProperty('--scale', 1);
    });
  });
} else {
  console.warn('Default_root element not found.');
}
