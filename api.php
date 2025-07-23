<?php
// Replace with your actual Impact.com API credentials
$accountSID = 'IR3Mp7b5ZkNF2325282vRrZgfh8DDDyyY1';      // e.g. IR3Mp7b5ZkNF2325282vRrZgfh8DDDyyY1
$authToken  = 'ZFGenoDK_JfbrNHM6XvkJ5HcZqpeeKt_';

$url = "https://api.impact.com/Mediapartners/$accountSID/Catalogs"; // Replace 'Catalogs' with your desired object

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, "$accountSID:$authToken"); // Basic Auth
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP Status: $httpCode\n";
echo $response;
?>
