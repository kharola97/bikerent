const accountSid = 'ACbbd1f0b0626238a70210c5b270bb5fc4';
const authToken = '7ce0871a56153e288433b7f517e93adb';

const client = require('twilio')(accountSid, authToken);

 


  const sendSms = async(req, res)=>{
  
    client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+918755519071', // Text your number
    from: '+12252894820', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  }


  module.exports.sendSms = sendSms



