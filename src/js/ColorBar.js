import {relayColors} from "./helpers/colors";

class ColorBar {
    constructor() {
        // Obtener el elemento contenedor
        const container = document.getElementById('colorBarContainer');

        // Crear la barra de altura 8px
        const bar = document.createElement('div');
        bar.style.height = '8px';
        bar.style.display = 'flex';
        bar.style.flexWrap = 'nowrap';

        // Crear las 15 barras de colores
        for (let i = 0; i < 15; i++) {
            const color = relayColors[Math.floor(Math.random() * relayColors.length)];
            const div = document.createElement('div');
            div.style.flex = '1';
            div.style.backgroundColor = color;
            bar.appendChild(div);
        }

        // Agregar la barra al contenedor
        container.appendChild(bar);
    }
}

export default ColorBar;