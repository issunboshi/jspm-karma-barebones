function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }

    return el.classList.contains(className);
}

export {addClass};
