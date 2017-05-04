var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = 'your_auth_token';
var IpMessagingClient = require('twilio').IpMessagingClient;

var client = new IpMessagingClient(accountSid, authToken);
var service = client.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

service.roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').post({
    permission: 'sendMessage',
    permission: 'leaveChannel'
}).then(function(response) {
    console.log(response);
}).fail(function(error) {
    console.log(error);
});
