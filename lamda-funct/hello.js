module.exports.handler = async (event) => {
  console.log('Event: ', event)
  let responseMessage = 'Welcome to our demo API, here are the details of your request';

 let username;
 let password;
 
 if (event.queryStringParameters && event.queryStringParameters['username'] && event.queryStringParameters['password']) {
  username = event.queryStringParameters['username']
  password = event.queryStringParameters['password']
 }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
     "username": username,
     "password": password
    }),
  }
}
