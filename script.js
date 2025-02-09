function changeTab(meal) {
    // Remove 'active' class from all tabs and content
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.food-item').forEach(content => content.classList.remove('active'));

    // Add 'active' class to clicked tab and its content
    event.target.classList.add('active');
    document.getElementById(meal).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButtons = document.querySelectorAll(".collapsible");

    collapsibleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle max-height for smooth collapse/expand effect
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});














const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Remove to re-trigger animation
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.animated').forEach(element => {
    observer.observe(element);
  });











  /*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')