class FormularioPdfMailer < ApplicationMailer
  def send_pdf(email, pdf_filename)
    attachments['formulario.pdf'] = File.read(pdf_filename)
     logger.info "Preparing to send PDF email to #{email}"
    mail(to: email, subject: 'PDF do Formulário')
      logger.info "HTML email content rendered"
  end
end
