# QR Generator lambda function

* Step1: Create your lambda function on your aws account

* Step2: Use github actions to deploy your lambda function every time you push to the main branch. (already done, you miust just configure your aws credientiels)

* * *  Step3: try your function

`
curl --location --request POST 'http://LINK_TO_YOUR_LAMBDA_FUNCTION' \
--header 'Content-Type: application/json' \
--data-raw '{
    "items": [
        "Hello world!",
        "Hakuna Matata"
    ]
}'
`