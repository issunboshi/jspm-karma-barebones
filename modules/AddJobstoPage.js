import fastdom from "fastdom";
import _ from 'lodash';

class AddJobstoPage {

    constructor(targetSelector, nodes) {

        this.targetSelector = targetSelector;
        this.nodes = nodes;
        this.targetEl;

    }

    getTargetEl() {

        fastdom.read(() => {

            this.targetEl = document.querySelectorAll(this.targetSelector);

        });

    }

    /**
     * Remove children from the parent element
     * @param  {Object} el The DOM object clear
     * @return {Object}    The emptied object
     */
    clearChildren(el) {
        return el.innerHTML = '';
    }

    /**
     * Create child DOM elements ready to be added to the parent element
     * @param  {Boolean} shouldClearExisting Specify whether to clear existing children within the parent element before appending the new children
     * @param  {Object} children            An object containing the child items
     * @return {Object}                     An object of DOM elements, ready to be appended
     */
    createChildren(shouldClearExisting, children) {

        if (shouldClearExisting === true) {
            clearChildren();
        }



    }

    addChildrenToDom() {

        fastdom.write(() => {
            _.forEach(this.nodes, (n, key) => {
                console.log(key + " " + n);
            });

        });

    }

}

export default AddJobstoPage;
