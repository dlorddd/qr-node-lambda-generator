/**
 * Generate qr codes from a list of strings (a qr code for each string) :)
 */

const qr = require("qr-image")

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS'){
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify('Hello from Lambda!'),
        };
    }

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
        qr: [...qr.imageSync(e, {type: 'png', size: 1})],
    }))

    return {
        statusCode: 200,
        headers: {
            "x-custom-header": "alpha"
        },
        body: JSON.stringify(responseBody)
    };
};

