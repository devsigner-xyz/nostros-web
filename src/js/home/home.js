import Modal from '../Modal'

import('material-symbols/outlined.scss').then(() => {
  console.log('Material symbols loaded');
});

import('../CopyToast.js').then(({default: CopyToast}) => {
  const copyToast = new CopyToast('.copy');
});

import('../NotesCarousel.js').then(({default: NotesCarousel}) => {
  const copyToast = new NotesCarousel();
});

import('../ColorBar.js').then(({default: ColorBar}) => {
  const copyToast = new ColorBar('.copy');
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = new Modal();
});