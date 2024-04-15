import $ from 'jquery';

/**
 * Realiza una animación de desplazamiento suave hacia una sección específica de la página.
 *
 * @param {Object} component - El componente que se verificará. Si el componente existe, se realiza la animación.
 * @param {string} sectionId - El ID de la sección a la que se desplazará la página.
 * @param {number} transitionTime - El tiempo (en milisegundos) que durará la transición.
 * @param {string} [animationType="swing"] - El tipo de animación que se utilizará. Por defecto es "swing".
 *
 * @example
 * // Desplaza suavemente hacia la sección con ID "mySection" en 2000 milisegundos utilizando la animación "linear".
 * ScrollAnimation(true, "mySection", 2000, "linear");
 */
export function ScrollAnimation(component, sectionId, transitionTime, animationType = "swing") {
    if (component) {
        $('html, body').animate({
            scrollTop: $(`#${sectionId}`).offset().top
        }, transitionTime, animationType);
    }
}

/**
 * Realiza una animación de desplazamiento suave hacia una sección específica de la página.
 *
 * @param {boolean} component - Si es verdadero, se realiza la animación.
 *
 * @example
 * // Desplaza suavemente hacia la sección con ID "mySection".
 * ScrollAnimation(true, "mySection");
 */
export function ScrollIntoViewAnimation(component) {
    if (component) {
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
