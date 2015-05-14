import addClass from 'helpers/addClass';
import removeClass from 'helpers/removeClass';
import toggleClass from 'helpers/toggleClass';

/**
 * Add .js to the html element
 * @return {Function}
 */
function initiateJS() {

    var htmlEl = document.querySelectorAll('html')[0];

    return addClass(htmlEl, 'js');
}

export {initiateJS};
