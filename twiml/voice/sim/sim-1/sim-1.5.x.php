<?php
require_once './vendor/autoload.php';
use Twilio\TwiML\VoiceResponse;

$response = new VoiceResponse();
$dial = $response->dial('');
$dial->sim('DE8caa2afb9d5279926619c458dc7098a8');

echo $response;
