/**
 * Get data from a URL and handle it in a consistent way using promises to handle callbacks and error handling it
 * @param  {[type]}
 * @return {[type]}
 */
function getData(dataURL) {

    return new Promise((resolve, reject) => {

        var request = new XMLHttpRequest();

        request.open('GET', dataURL);

        request.onload = () => {

            if (request.status == 200) {

                resolve(request.response);

            } else {

                reject(Error(request.statusText));

            }

        };

        // Handle network errors
        request.onerror = () => {

            reject(Error("Network Error"));

        };

        // Make the request
        request.send();

    });

}

export default getData;
