import XmlToJSON from 'vendor/xmlToJSON';

/**
 * Take XML and turn it into a JS object
 * @param  {String} String of XML
 * @return {Function} Handler to detect errors in XML conversion
 */
function convertRSStoJSON(xml) {
    var escapedXML, xmlConverter, outputJSON,
        xmlConversionOptions = {
            namespaceKey: 'namespace',
            textKey: 'text',
            valueKey: 'value',
            attrKey: 'attribute',
            cdataKey: 'cdata'
        };

    xmlConverter = new XmlToJSON();

    outputJSON = JSON.stringify(xmlConverter.parseString(xml, xmlConversionOptions));

    return handleParsedXML(outputJSON);

}

/**
 * Handle parsed XML and either return it as is or throw an error - XmlToJSON doesn't send obvious errors back, instead it sends XML stating there has been an error
 * @param  {String} A stringified representation of the converted XML
 * @return {[type]}
 */
function handleParsedXML(convertedJSON) {
    if (convertedJSON.indexOf("parsererror") > -1) {

        throw new Error('Conversion failed, ensure valid XML is being provided');

    } else {

        return convertedJSON;

    }
}

export default convertRSStoJSON;
