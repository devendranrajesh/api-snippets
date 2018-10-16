<?php
require_once 'vendor/autoload.php';
use Twilio\TwiML\VoiceResponse;

$response = new VoiceResponse();
$pay = $response->pay();
$prompt = $pay->prompt(['for' => 'payment-card-number']);
$prompt->say('Please enter your 15 digit visa or master card number.');

echo $response;
