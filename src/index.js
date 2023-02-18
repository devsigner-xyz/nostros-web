import('./styles.scss').then(() => {
  console.log('Styles loaded');
});

import('material-symbols/outlined.scss').then(() => {
  console.log('Material symbols loaded');
});

import('./js/CopyToast.js').then(({default: CopyToast}) => {
  const copyToast = new CopyToast('.copy');
});

import('./js/NotesCarousel.js').then(({default: NotesCarousel}) => {
  const copyToast = new NotesCarousel();
});

import('./js/ColorBar.js').then(({default: ColorBar}) => {
  const copyToast = new ColorBar('.copy');
});

// import('./js/Modal.js').then(({default: Modal}) => {
//   const modal = new Modal();
// });

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(
    ($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    }
  );

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});