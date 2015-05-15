import convertRSStoJSON from 'modules/convertRSStoJSON';
import getData from 'modules/getData';

/**
 * Make an AJAX request for a XML resource and then convert it to JSON
 * @param  {String} resource A URL ontaining XML
 * @return {Object}          A promise
 */
function retrieveAndConvertXML(resource) {

    return new Promise((resolve, reject) => {

        getData(resource)
        .then((response) => {

            resolve(convertRSStoJSON(response));

        })
        .catch((error) => {

            reject(error);

        })

    });

}

export default retrieveAndConvertXML;
