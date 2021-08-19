const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '3e5a69f8d7f4da0427c7567286af157a-9776af14-84f194a1',
        domain: 'sandbox177f511301b14cc9bb5fa208d393aa3b.mailgun.org',

    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'winstonoseme@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

}

module.exports = sendMail;