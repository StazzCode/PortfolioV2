// Make the cursor background following the cursor position
const CustomCursor = document.querySelector('.CustomCursor');

// Initial position of the tracker
let trackerX = 0;
let trackerY = 0;

// Speed factor (the lower the value, the slower the tracker will move)
const speed = 0.1;
// Threshold for snapping the tracker to the cursor position
const threshold = 0.5;

// Target position for the tracker
let targetX = 0;
let targetY = 0;

// Flag to check if the cursor is in the window
let cursorInWindow = true;

// Update position on mousemove
document.onmousemove = (event) => {
  CustomCursor.style.opacity = 1;
  CustomCursor.style.transition = '0s';

  targetX = event.clientX;
  targetY = event.clientY;

  // If the cursor has just re-entered the window, reset the tracker position
  if (!cursorInWindow) {
    trackerX = targetX;
    trackerY = targetY;
    cursorInWindow = true; // Reset the flag
  }
}

// Handle when the cursor leaves the window
document.onmouseout = (event) => {
  cursorInWindow = false;
};

// Continuously update the position for smooth tracking
function updateTracker() {
  requestAnimationFrame(updateTracker);

  // Lerp towards the cursor position
  trackerX += (targetX - trackerX) * speed;
  trackerY += (targetY - trackerY) * speed;

  // Check if the tracker is close enough to the target position
  if (Math.abs(targetX - trackerX) < threshold && Math.abs(targetY - trackerY) < threshold) {
      trackerX = targetX;
      trackerY = targetY;
  }

  // Apply the updated position
  CustomCursor.style.transform = `translate3d(${trackerX-3}px,${trackerY-3}px, 0)`;
}

updateTracker();

document.onmouseout = (event) => {
  CustomCursor.style.transition = "0.2s";
  CustomCursor.style.opacity = 0;
}

// Affect the cursor on hover

const Hoverable = document.querySelectorAll('a');
const Default_root = document.querySelector('.Default_root');

if (Default_root) {
  Hoverable.forEach((element) => {
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