// Importamos las funciones de navegación
import { next, prev } from './navigationFunctions.js';

/**
 * Función para manejar el evento de clic en el componente.
 *
 * @param {string} e - El evento de clic, puede ser 'next' o 'prev'.
 * @param {number} index - El índice actual en los datos.
 * @param {Array} data - Los datos que se están navegando.
 * @param {Function} setNextEff - Función para establecer el estado de NextEffect.
 * @param {Function} setPrevEff - Función para establecer el estado de PrevEffect.
 * @param {Function} setIndex - Función para establecer el índice.
 */

export function handleClick(e, index, data, setNextEff, setPrevEff, setIndex) {

    // Si el evento es 'next', navegamos hacia adelante
    if (e == 'next') {
        setNextEff(true);
        setTimeout(() => (
            setIndex(next(index, data)),
            setNextEff(false)
        ), 600);
    }
    // Si el evento es 'prev', navegamos hacia atrás
    else {
        setPrevEff(true);
        setTimeout(() => (
            setPrevEff(false),
            setIndex(prev(index, data))
        ), 600);
    }
}
