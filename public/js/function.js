var composeBox = document.querySelector('.compose-wrapper');
var composeButton = document.querySelector('.nav-display button');

composeButton.addEventListener('click', function(){
  composeBox.classList.toggle('active-compose');
})
