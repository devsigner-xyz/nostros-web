import { relayColors } from './helpers/RelayColors';

class ColorBar {
  constructor() {
    const container = document.getElementById('colorBarContainer');

    const bar = document.createElement('div');
    bar.style.height = '8px';
    bar.style.display = 'flex';
    bar.style.flexWrap = 'nowrap';

    for (let i = 0; i < 15; i++) {
      const color = relayColors[Math.floor(Math.random() * relayColors.length)];
      const div = document.createElement('div');
      div.style.flex = '1';
      div.style.backgroundColor = color;
      bar.appendChild(div);
    }

    container.appendChild(bar);
  }
}

export default ColorBar;
