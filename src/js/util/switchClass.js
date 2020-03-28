/**
 * Remove old class, add new class
 *
 * @param {string} selector - target selector
 * @param {string} oldClass - name of class to remove
 * @param {string} newClass - name of class to add
 */

const switchClass = (
    selector = 'html',
    oldClass = 'no-js',
    newClass = 'js'
) => {
    const el = document.querySelector(selector);
    el.classList.remove(oldClass);
    el.classList.add(newClass);
};

export default switchClass;
