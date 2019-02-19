require('twilio-ruby')

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'

client = Twilio::REST::Client.new(account_sid, auth_token)
service = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

begin
  response = service.sync_maps('Players')
                    .sync_map_permissions('bob')
                    .update(read: true, write: true, manage: true)
  puts response
rescue Twilio::REST::TwilioError => err
  puts err
end
