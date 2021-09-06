var qrcode = require('yaqrcode');

/**
 * Generate qr codes from a list of strings (a qr code for each string)
 */
exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  
  if (event.httpMethod !== 'POST' || !requestBody.items) {
    return {
      code: 400,
      message: 'Malfofrmed request.'
    }
  }

  let result = requestBody.items.map(e => ({
    item: e,
    qr: qrcode(e), 
  }))

  return result;
};

