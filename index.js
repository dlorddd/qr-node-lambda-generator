var qrcode = require('yaqrcode');

/**
 * Generate qr codes from a list of strings (a qr code for each string)
 */
 var qrcode = require('yaqrcode');

 exports.handler = async (event) => {
   const requestBody = JSON.parse(event.body);

   if (event.httpMethod !== 'POST' || !requestBody.items) {
     return {
       statusCode: 400,
       headers: {
         "x-custom-header" : "alpha"
       },
       body: 'Malfofrmed request.'
     }
   }

    let responseBody = requestBody.items.map(e => ({
      item: e,
      qr: qrcode(e), 
    }))

    let response = {
      statusCode: 200,
      headers: {
        "x-custom-header" : "alpha"
      },
      body: JSON.stringify(responseBody)
     };

     return response;
 };

