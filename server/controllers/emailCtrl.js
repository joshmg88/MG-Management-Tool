const nodemailer = require('nodemailer')
const ses = require('nodemailer-ses-transport')



let transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
}))

const sendEmail = (req, res) => {
    let { name, phone, email, address, details } = req.body

    transporter.sendMail({

        from: 'jms.quoterequest@gmail.com',
        to: 'joshmg88@gmail.com',
        subject: 'Quote Request',
        text: `${name} ${phone} ${email} ${address} ${details}`
    }).catch(err => console.log(err))
}

module.exports = {
    sendEmail
}

