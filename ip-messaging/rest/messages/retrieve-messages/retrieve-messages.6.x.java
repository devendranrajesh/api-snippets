import com.twilio.sdk.TwilioIPMessagingClient;
import com.twilio.sdk.resource.instance.ipmessaging.Service;
import com.twilio.sdk.resource.instance.ipmessaging.Channel;
import com.twilio.sdk.resource.instance.ipmessaging.Message;
import com.twilio.sdk.resource.list.ipmessaging.MessageList;

public class TwilioTest {
    // Find your Account Sid and Token at twilio.com/user/account
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static final String SERVICE_SID = "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String CHANNEL_SID = "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String MESSAGE_SID = "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    public static void main(String args[]) throws TwilioRestException {
        // Initialize the client
        TwilioIPMessagingClient client = new TwilioIPMessagingClient(ACCOUNT_SID, AUTH_TOKEN);

        // Retrieve the channel
        Service service = client.getService(SERVICE_SID);
        Channel channel = service.getChannel(CHANNEL_SID);

        // Retrieve the message
        Message message =  channel.getMessage(MESSAGE_SID);
        System.out.println(message);
    }
}