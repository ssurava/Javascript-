var nodemailer = require('nodemailer');
var mailTransport = nodemailer.createTransport({
    service:'Gmail', auth: {
        user: 'shravan.suravarjjala@gmail.com',
        pass: 'jo',
    },
    tls:{
        rejectUnauthorized:false
    }

});

mailTransport.sendMail({
    from: '"Shravan Travel" <shravan.suravarjjala.com>',
    to: 'shravan.suravarjjala@gmail.com',
    subject: 'Your Shravan Travel Tour',
    html:'<h1>Dude!!</h1> <b> Within twenty four hours the money has to be given to fly with our group</b>',
    text: 'Hi, We are Shravan Travels Group ' +
    'We look forward to your money!',
   }, function(err){
    if(err) console.error( 'Unable to send email: ' + err);
   });
