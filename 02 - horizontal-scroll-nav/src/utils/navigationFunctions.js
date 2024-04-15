/**
 * Función para navegar al siguiente índice en los datos.
 *
 * @param {number} index - El índice actual en los datos.
 * @param {Array} data - Los datos que se están navegando.
 * @return {number} - El nuevo índice después de navegar.
 */

export function next(index, data) {
    if (index >= data.length - 1) {
        return 0;
    } else {
        return index + 1;
    }
}

/**
 * Función para navegar al índice anterior en los datos.
 *
 * @param {number} index - El índice actual en los datos.
 * @param {Array} data - Los datos que se están navegando.
 * @return {number} - El nuevo índice después de navegar.
 */

export function prev(index, data) {
    if (index <= 0) {
        return data.length - 1;
    } else {
        return index - 1;
    }
}
