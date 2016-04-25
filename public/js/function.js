var composeBox = document.querySelector('.compose-wrapper');
var composeButton = document.querySelector('.nav-display button');
var reply = document.querySelector('.mail-reply button');
var replyInput = document.querySelector('.reply-box input');
var replyClose = document.querySelector('.mail-reply i');
var composeClose = document.querySelector('.compose-heading i');

//****************************************
// CLICK EVENTS
//****************************************

// Click Event for Compose form
composeButton.addEventListener('click', function(){
  composeEvent();
})
composeClose.addEventListener('click', function(){
  composeEvent();
})

// Click Event for Reply form
reply.addEventListener('click', function(){
  replyOpenEvent();
})
replyClose.addEventListener('click', function(){
  replyCloseEvent();
})


//****************************************
// FUNCTIONS
//****************************************

// REPLY OPEN FUNCTION
function replyOpenEvent() {
  reply.classList.add('active-reply');

  setTimeout(function() {
    reply.style.display = 'none';
  }, 500);

  replyInput.classList.add('active-reply');
  replyClose.style.display = 'initial';

  setTimeout(function(){
    replyClose.classList.add('active-reply');
  },100)

}

// REPLY CLOSE FUNCTION
function replyCloseEvent(){
  reply.style.display = 'initial';

  setTimeout(function(){
    reply.classList.remove('active-reply');
  },100)

  replyInput.classList.remove('active-reply');
  replyClose.classList.remove('active-reply');

}


// Handles Compose Click Events
function composeEvent(){

  if(composeBox.style.display !== 'initial') {
    composeBox.style.display = 'initial';
    setTimeout(function(){
      composeBox.classList.toggle('active-compose');
    }, 100)
  } else {
    composeBox.classList.toggle('active-compose');
    setTimeout(function(){
      composeBox.style.display = 'none';
    }, 500)
  }

}
