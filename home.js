
const text = ["Developer", "Designer", "Student"];
let i = 0, j = text[0].length, isDeleting = true;

function type() {
  let current = text[i];
  let displayed = current.substring(0, j);
  document.getElementById("typewriter").innerHTML = displayed;

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

setTimeout(type, 4000);

function observeAndAnimate(selector, className, threshold = 1) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target); // Remove after triggering once
        }
      });
    }, { threshold });
  
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }
  observeAndAnimate('.what-i-do', 'what-i-do1');  

  window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
  
    if (hash) {
      // Try to scroll after a short delay to ensure layout is stable
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" }); // or "auto"
        }
      }, 1500); // Delay to wait for DOM to fully paint
    }
  });
  