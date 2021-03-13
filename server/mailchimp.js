const request = require('request');

async function subscribe({ email }) {
    const data = {
      email_address: email,
      status: 'subscribed',
    };
    const listId = 'e2163926e4';
    const API_KEY = 'c7fca508b53391d9499aaddc3772bbe8-us1';
  await new Promise((resolve, reject) => {
      request.post(
        {
          uri: `https://us1.api.mailchimp.com/3.0/lists/${listId}/members`,
          headers: {
            Accept: 'application/json',
            Authorization: 
            `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`
          },
          json: true,
          body: data,
        },
        (err, response, body) => {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        }
      );
    });
  }