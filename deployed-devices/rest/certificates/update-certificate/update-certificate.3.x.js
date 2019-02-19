// Get the Node helper library from https://twilio.com/docs/libraries/node
const Twilio = require('twilio').Twilio;

// Get your Account SID and Auth Token from https://twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = new Twilio(accountSid, authToken);

const fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const fleetService = client.preview.deployed_devices.fleets(fleetSid);

fleet
  .certificates('CYXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .update({
    friendlyName: 'My New Certificate',
    deviceSid: 'THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
