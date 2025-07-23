<?php
// Replace with your actual Impact.com API credentials
$accountSID = 'IR6LjxeWA69s2325282bTv5Ass323eUmW1';      // e.g. IR3Mp7b5ZkNF2325282vRrZgfh8DDDyyY1
$authToken  = 'Q_VhR4dzZYXm~UZoFERYbvgAbN2BrYHu';

// old navy: 4961
// lowe's: 7590
// gap: 4959
$url = "https://api.impact.com/Mediapartners/$accountSID/Catalogs/7590/Items"; // Replace 'Catalogs' with your desired object

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

// Format output
echo "<pre>"; // this helps in browser to preserve formatting
echo "HTTP Status: $httpCode\n\n";

// Decode and pretty-print JSON
$json = json_decode($response, true);

if (json_last_error() === JSON_ERROR_NONE) {
    echo json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
} else {
    echo "Invalid JSON:\n$response";
}

echo "</pre>";

?>
