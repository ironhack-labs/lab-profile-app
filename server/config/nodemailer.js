const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  service: 'hotmail.com',
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASS
  }
})

exports.emailRegistro = (email, name) => {
  return transporter.sendMail({
    from: 'spacechallenge@hotmail.com',
    to: email,
    subject: 'Welcome to  ...',
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>
          .title{
            color: gray;
            font-weight: bold
          }

          </style>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
        </head>
        <body>
        <h1 class="title">Hi ${name} Welcome to  ...</h1>
        </body>
        </html>
    `
  })
}
