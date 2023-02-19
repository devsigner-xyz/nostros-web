import Modal from './js/Modal'

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

document.addEventListener('DOMContentLoaded', () => {
  const modal = new Modal();
});