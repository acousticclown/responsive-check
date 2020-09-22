// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// const sunMoonContainer = document.querySelector('.sun-moon')

// document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
// document.body.classList.toggle('dark')
// const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
// sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
// })

///////////////////////////////////////  CUSTOM  TESTING //////////////////////////////////////////


// let darkMode = localStorage.getItem('darkMode'); 
// let lightMode = localStorage.getItem('lightMode');

// const darkModeToggle = document.querySelector('#dark-mode-toggle');

// const lightModeToggle = document.querySelector('#light-mode-toggle');

// const DarkMode = () => {
//   //1. Remove thelightmode
//   document.body.classList.remove('lightMode');
//   // 2. Add the class to the body :- darkmode to body
//   document.body.classList.add('darkMode');
//   // 3. Update darkMode in localStorage
//   localStorage.setItem('darkMode', 'enabled');
//   // 4. Update lightmode in localstorage
//   localStorage.setItem('lightMode', null);
// }

// const LightMode = () => {
//   // 1. Remove the class from the body
//   document.body.classList.remove('darkMode');
//   // 2. Remove the class from the body
//     document.body.classList.add('lightMode');
//   // 3. Update darkMode in localStorage 
//   localStorage.setItem('lightMode', 'enabled');
//   // 4. Update darkMode in localStorage 
//   localStorage.setItem('darkMode', null);
// }
 
// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
//   DarkMode();
// }

// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem('darkMode'); 
  
//   // if it not current enabled, enable it
// //   if (darkMode !== 'enabled') {
// //     DarkMode();
// //   // if it has been enabled, turn it off  
// //   } else {  
// //     LightMode(); 
// //   }
// });

// if (lightMode === 'enabled'){
//   LightMode();
// }

// lightModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//   lightMode = localStorage.getItem('lightMode'); 
  
//   // if it not current enabled, enable it
// //   if (lightMode !== 'enabled') {
// //     DarkMode();
// //   // if it has been enabled, turn it off  
// //   } else {  
// //     LightMode(); 
// //   }
// });

// document.querySelectorAll('.stylebutton').forEach(function(e) {
//   e.addEventListener('click', function() {
//     this.style.backgroundColor = "transparent";
//   })
// })

// ///////////////////////////////
// const sunMoonContainer = document.querySelector('.sun-moon')

// document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
// document.body.classList.toggle('dark')
// const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
// sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)


