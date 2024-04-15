/**
 * Maneja el evento de desplazamiento (scroll) en un componente.
 *
 * @param {Object} e - El evento de desplazamiento.
 * @param {Array} componentList - La lista de componentes en los que se puede desplazar.
 * @param {Function} setCurrentPage - La función que establece la página actual.
 * @param {boolean} isScrolling - Un indicador de si se está desplazando actualmente.
 * @param {Function} setIsScrolling - La función que establece el indicador de desplazamiento.
 * @param {number} onWheelDelay - El tiempo (en milisegundos) que se debe esperar antes de permitir otro desplazamiento.
 */
export const HandleWheel = (e, componentList, setCurrentPage, isScrolling, setIsScrolling, onWheelDelay) => {

    // Si ya se está desplazando, ignora el evento de desplazamiento
    if (isScrolling) return;

    // Establece que se está desplazando
    setIsScrolling(true);

    // Permite el desplazamiento de nuevo después de un retardo especificado
    setTimeout(() => setIsScrolling(false), onWheelDelay);

    // Si el desplazamiento es hacia arriba, disminuye la página actual
    if (e.deltaY < 0) {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    }
    // Si el desplazamiento es hacia abajo, aumenta la página actual
    else {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, componentList.length - 1));
    }
}
