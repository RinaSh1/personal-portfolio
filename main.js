/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* Menu show */
      if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
      }

      /* Menu Close */
      if(navClose) {
        navClose.addEventListener('click', ()=> {
            navMenu.classList.remove('show-menu')
        })
      }


/* Scroll Reveal Animation */

const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home_title, .about_img, .skills_subtitle, .skills_text ',{});
sr.reveal('.home_img, .about_subtitle, .about_text', {delay: 400});
sr.reveal('.home_social-icon', {interval: 200});
sr.reveal('.skills_data, .contact_input',{interval: 200});
