const styleSwitcher = document.querySelector('.style-switcher-toggler');
styleSwitcher.addEventListener('click', () => {
   document.querySelector('.style-switcher').classList.toggle('open');
   // console.log(theme);
})

window.addEventListener('scroll', () => {
   if (document.querySelector('.style-switcher').classList.contains('open')) {
      document.querySelector('.style-switcher').classList.remove('open');
   }
})

// Theme Color

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
   alternateStyle.forEach((style) => {
      if (color === style.getAttribute("title")) {
         style.removeAttribute("disabled")
      }
      else {
         style.removeAttribute("disabled", "true")
      }
   })
}


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener('click', () => {
   localStorage.setItem('theme', 'dark');
   dayNight.querySelector('i').classList.toggle('fa-sun');
   dayNight.querySelector('i').classList.toggle('fa-moon');
   document.body.classList.toggle("dark")
});


const darkTheme = localStorage.getItem('theme')
console.log(darkTheme);



window.addEventListener("load", () => {
   if (document.body.classList.contains("dark")) {
      dayNight.querySelector("i").classList.add("fa-sun");
   }
   else {
      dayNight.querySelector("i").classList.add('fa-moon');
   }
})