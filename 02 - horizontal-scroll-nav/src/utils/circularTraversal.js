/**
 * CircularTraversal is a function that generates a new list of 5 elements from a given list.
 * The new list starts from a given index and continues in a circular manner.
 *
 * @param {_list} array - The original list from which the new list will be generated.
 * @param {indice} number - The starting index for the new list in the original list.
 * @param {setCardItems} function - A function to update the state of the card items with the new list.
 *
 * @returns {void} - The function does not return anything. It updates the state of the card items with the new list.
 */
export function CircularTraversal(_list, items, indice, setCardItems) {
    var newList = [];
    for (var i = 0; i < items; i++) {
        newList.push(_list[(indice + i) % _list.length]);
    }
    setCardItems(newList);
}
