class Modal {
  constructor() {
    this.modals = Array.from(document.querySelectorAll('.modal'));
    this.modalTriggers = Array.from(
      document.querySelectorAll('.js-modal-trigger')
    );

    this.modalCloses = Array.from(
      document.querySelectorAll(
        '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
      )
    );

    this.modalTriggers.forEach((trigger) => {
      const modal = document.getElementById(trigger.dataset.target);
      if (modal) {
        trigger.addEventListener('click', () => this.openModal(modal));
      }
    });

    this.modalCloses.forEach((close) => {
      const modal = close.closest('.modal');
      close.addEventListener('click', () => this.closeModal(modal));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  openModal($el) {
    $el.classList.add('is-active');
  }

  closeModal($el) {
    $el.classList.remove('is-active');
  }

  closeAllModals() {
    this.modals.forEach((modal) => this.closeModal(modal));
  }
}

export default Modal;
