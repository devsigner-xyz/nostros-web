import('../../styles/home/home.scss').then(() => {
  console.log('Home styles loaded');
});

import('../CopyToast.js').then(({ default: CopyToast }) => {
  const copyToast = new CopyToast('.copy');
});

import('../NotesCarousel.js').then(({ default: NotesCarousel }) => {
  const copyToast = new NotesCarousel();
});

import('../ColorBar.js').then(({ default: ColorBar }) => {
  const copyToast = new ColorBar('.copy');
});

import('../common/Modal').then(({ default: Modal }) => {
  const copyToast = new Modal();
});
