<?php
$apiKey = '808fff5c-bd84-4807-907c-5728b279f382';        // From your FlexOffers account
$domainId = '1324238';    // Publisher domain ID

// Base API endpoint (sample only – may vary)
$apiUrl = "https://api.flexoffers.com/v3/products/full?name=Dishwasher%20Detergent&page=1&pageSize=100";

// Set up headers
$headers = [
    "Authorization: Bearer $apiKey",
    "Accept: application/json"
];

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Parse and display
$data = json_decode($response, true);

print_r($data);

echo "<p>HTTP Status: $httpCode</p>";
echo "<pre>" . htmlentities($response) . "</pre>";


if (!empty($data['products'])) {
    foreach ($data['products'] as $product) {
        echo "<h2>{$product['title']}</h2>";
        echo "<img src='{$product['imageUrl']}' alt='Image'><br>";
        echo "Price: {$product['price']}<br>";
        echo "<a href='{$product['clickUrl']}'>Buy Now</a><hr>";
    }
} else {
    echo "No products found or there was an error.";
}


?>
