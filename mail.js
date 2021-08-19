const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '8a9c1ff7d38c68139ca823e1eb42a183-9776af14-b30e434d',
        domain: 'sandbox333170a420a242ba96fd510f9692b2d9.mailgun.org',

    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'winstonohunyon@gmail.com',
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