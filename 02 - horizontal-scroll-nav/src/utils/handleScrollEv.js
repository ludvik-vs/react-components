// Importamos las funciones de navegación
import { next, prev } from './navigationFunctions.js';

/**
 * Función para manejar el evento de desplazamiento (scroll) en el componente.
 *
 * @param {Event} e - El evento de desplazamiento.
 * @param {number} index - El índice actual en los datos.
 * @param {Array} data - Los datos que se están navegando.
 * @param {Function} setGoEff - Función para establecer el estado de GoEff.
 * @param {Function} setBackEff - Función para establecer el estado de BackEff.
 * @param {Function} setIndex - Función para establecer el índice.
 * @param {Function} setWheelValue - Función para establecer el valor de WheelValue.
 */

export function handleScroll(e, index, data, setGoEff, setBackEff, setIndex, setWheelValue) {
    // Establecemos el valor de WheelValue
    setWheelValue(e.deltaY);

    // Si el valor de deltaY es mayor a 0, navegamos hacia atrás
    if (e.deltaY > 0) {
        setIndex(next(index, data));
        setGoEff(true);
        setTimeout(() => setGoEff(false), 600);
    }
    // Si el valor de deltaY es menor o igual a 0, navegamos hacia adelante
    else {
        setIndex(prev(index, data));
        setBackEff(true);
        setTimeout(() => setBackEff(false), 600);
    }
}
