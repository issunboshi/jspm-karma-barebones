import handleStatus from 'helpers/handleStatus';

/**
 * Get data from a URL and handle it in a consistent way using promises to handle callbacks and error handling it
 * @param  {[type]}
 * @return {[type]}
 */
function getData(dataURL) {
    var responseData = "hello";

    fetch(dataURL)
    .then(handleStatus)
    .catch((err) => {
        responseData = err;
    });

    return responseData;
}

export {getData};
