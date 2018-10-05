# nodejs-sendsms
A NodeJS application to send SMS using Amazon SNS

## How to use

- Configure your Amazon AWS credentials on your environment ([Tutorial here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html));
- Download the project as **.zip**;
- Enter into project directory and run **npm install**;
- Run **npm app.js**;

- Try it using **Postman** or **cURL**, e.g.: `curl --data "phonenumber=+5519994195715&message=This is a test message" http://localhost:3000/messages/send`

## Parameters per endpoint
### messages/send
- phonenumber: Phone number that will receive the message;
- message: String containing the text that will be sent.
