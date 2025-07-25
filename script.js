  const menuBtn = document.getElementById('menuBtn');
  const menu = menuBtn.querySelector('.menu'); // The inner 3-line hamburger
  const cross = document.querySelector('.cross'); // Not 'body'
  const menuItems = document.querySelector('.menu-items'); // The 3 menu items

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open'); // Controls hamburger to cross
    cross.classList.toggle('all'); // Controls background dim effect
    menuItems.classList.toggle('toggle'); // Controls menu items
  });


  if (performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0].type === "reload") {
    // Show loader
    document.getElementById('loader').style.display = 'flex';

    // Wait and then hide loader
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').classList.add('animate-curtain-exit');
      }, 1000); // delay after loading completes
    });
  } 
  
const links = document.querySelectorAll(".nav-link");
window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.href;
  console.log(currentPath);
  links.forEach(link => {
    const linkPath = new URL(link.href);
    console.log( "linked path is",linkPath);
   
    if (linkPath === currentPath) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});
links.forEach(link => {
  link.addEventListener("click", (e) => {
    const currentUrl = window.location.href; // Remove hash if any
    const linkUrl = new URL(link.href).href;

    if (currentUrl === linkUrl) {
      e.preventDefault(); // ✅ prevent normal navigation
      window.location.reload();
      return;
    }

    // Otherwise, continue with curtain transition
    e.preventDefault();
    document.body.classList.add("animate-curtain-exit");

    setTimeout(() => {
      window.location.href = link.href;
    }, 2000); // match your curtain animation
  });
});
