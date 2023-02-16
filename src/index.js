import './styles.scss'
import 'material-symbols/outlined.scss';

import CopyToast from "./js/CopyToast.js";
import HeaderCarousel from "./js/HeaderCarousel.js";


const copyToast = new CopyToast('.copy');
window.addEventListener('DOMContentLoaded', () => {
    const headerCarousel = new HeaderCarousel();
});