const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port:  587,
      auth: {
        user: "dirofumi@outlook.com",
        pass: "koclredcwjabajtb"
        }
      });
    const mensaje={
        from: "Stark Beer Store <dirofumi@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;