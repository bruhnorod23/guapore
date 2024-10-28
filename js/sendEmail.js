const nodemailer = require('nodemailer');

// Configurações de transporte
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

// Configurações do e-mail
let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'destinatario@example.com',
    subject: 'Dados do formulário',
    text: 'Aqui estão os dados do formulário:\n\n' + JSON.stringify(formData)
};

// Enviar e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});
