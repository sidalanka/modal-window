'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const showModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// In order to listen for keyboard events, we still need to use addEventlistener. Because the key press events is simply just another type of event. Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually listen on the whole document.

// So by using addEventListener here on the document we are basically listening for events everywhere. So no matter where they happen on the pageXOffset, they will always trigger the event handler.
document.addEventListener('keydown', function (e) {
  // console.log(e);
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    // 'If' modal does not contain hidden class
    closeModal();
  }
});
