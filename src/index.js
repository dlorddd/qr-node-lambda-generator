var qrcode = require('yaqrcode');

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

