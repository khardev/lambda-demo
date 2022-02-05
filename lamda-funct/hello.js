module.exports.handler = async (event) => {
  console.log('Event: ', event)
  let responseMessage = 'Welcome to our demo API, here are the details of your request';
 let body;
 if (event.body) {
       body = JSON.parse(event.body)
   console.log(body);
   }
 console.log("console logs");
 console.log(body.username);
 console.log(body.password);
 let username = body.username;
 let password = body.password;
  return {
   statusCode: 200,
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     message: responseMessage,
     "username":username,
     "password":password
   }),
 }
}
