/**
 * Remove no-js class, add js class
 */

const jsReady = () => {
    const el = document.querySelector('html');
    el.classList.remove('no-js');
    el.classList.add('js');
};

export default jsReady;
