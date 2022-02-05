module.exports.handler = async (event) => {
   console.log('Event: ', event)
   let responseMessage = 'Welcome to our demo API, here are the details of your request';

+  if (event.queryStringParameters && event.queryStringParameters['Name']) {
+    responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';
+  }
+
   return {
     statusCode: 200,
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       message: responseMessage,
     }),
   }
 }
