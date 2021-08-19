const express = require('express');
const sendMail = require('./mail.js');
const log = console.log;
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) =>{
    //TODO:
    //Send email
    const {subject, email, text} = req.body;
    log('Data: ', req.body);
    sendMail(email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({message: "Some Error Occured"});
        } else {
            res.json({message: "Email Sent."})
           
        }

    });
});

app.use(express.static(path.join(__dirname, "frontend")));
app.listen(PORT, () => log('Server is live at PORT ' + 8080 + ' because God no go shame us.'));