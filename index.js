/**
 * Generate qr codes from a list of strings (a qr code for each string) :)
 */

var qr = require('@cheprasov/qrcode/src/QRCodeCanvas')
var qr = require('@cheprasov/qrcode/src/QRCodeCanvas')

exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);

    if (event.httpMethod !== 'POST' || !requestBody.items) {
        return {
            statusCode: 400,
            headers: {
                "x-custom-header": "alpha"
            },
            body: 'Malformed request.'
        }
    }

    let responseBody = requestBody.items.map(e => ({
        item: e,
        qr: new qr(e).toDataURL(),
    }))

    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header": "alpha"
        },
        body: JSON.stringify(responseBody)
    };

    return response;
};

