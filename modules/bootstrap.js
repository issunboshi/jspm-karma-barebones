import {addClass} from '../helpers/addClass';
import {removeClass} from '../helpers/removeClass';
import {toggleClass} from '../helpers/toggleClass';

function initiateJS() {
    var htmlEl = document.querySelectorAll('html')[0];

    return addClass(htmlEl, 'js');
}

function destroyJS() {
    var htmlEl = document.querySelectorAll('html')[0];

    return removeClass(htmlEl, 'js');
}


function toggleJS() {
    var htmlEl = document.querySelectorAll('html')[0];

    return toggleClass(htmlEl, 'js');
}

export {initiateJS, destroyJS, toggleJS};
