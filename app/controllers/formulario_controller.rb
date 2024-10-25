class FormularioController < ApplicationController
  require 'prawn'
  skip_before_action :verify_authenticity_token # Para permitir requisições sem token CSRF (se necessário)

  def index
    # Ação padrão que renderiza o formulário
  end

  def salvar_dados
    @dados = params[:dados]  # Recebe os dados enviados pelo JavaScript

    # Exemplo de como acessar os dados
    @unidade_fornecedor = @dados[:unidade_fornecedor]
    @vendedor_fornecedor = @dados[:vendedor_fornecedor]
    @taxas_maquininha = @dados[:taxas_maquininha]
    @tipo_cad_unico = @dados[:tipo_cad_unico]
    @cad_unico_cliente = @dados[:cad_unico_cliente]
    @mcc = @dados[:mcc]
    @qtd_maquininha = @dados[:qtd_maquininha]
    @faturamento_cliente = @dados[:faturamento_cliente]
    @razao_cliente = @dados[:razao_cliente]
    @fantasia_cliente = @dados[:fantasia_cliente]
    @email_cliente = @dados[:email_cliente]
    @tipo_contato = @dados[:tipo_contato]
    @cpf_contato = @dados[:cpf_contato]
    @nome_contato = @dados[:nome_contato]
    @tel_contato = @dados[:tel_contato]
    @cel_contato = @dados[:cel_contato]
    @email_contato = @dados[:email_contato]
    @cep = @dados[:cep]
    @ufisc = @dados[:ufisc]
    @end_cidade = @dados[:end_cidade]
    @tipo_logradouro = @dados[:tipo_logradouro]
    @logradouro = @dados[:logradouro]
    @num_logradouro = @dados[:num_logradouro]
    @bairro_logradouro = @dados[:bairro_logradouro]
    @nome_entrega = @dados[:nome_entrega]
    @cel_entrega = @dados[:cel_entrega]
    @email_entrega = @dados[:email_entrega]
    @bank_list = @dados[:bank_list]
    @tipo_conta = @dados[:tipo_conta]
    @nro_agencia = @dados[:nro_agencia]
    @digito_agencia = @dados[:digito_agencia]
    @nro_conta = @dados[:nro_conta]
    @digito_conta = @dados[:digito_conta]

    # Acesse outros campos conforme necessário

    # Aqui você pode inserir lógica para salvar os dados no banco de dados, enviar emails, etc.
    render json: { message: 'Dados salvos com sucesso!' }
    generate_pdf # executa o método generate_pdf dentro das instâncias do salvar_dados
    # Debugging: Imprimir os parâmetros para verificar se estão corretos

  end

  def generate_pdf

  @dados = params[:dados]

    # Capturar os dados do método salvar_dados
    @unidade = @unidade_fornecedor
    @vendedor_f = @vendedor_fornecedor
    @taxas_m = @taxas_maquininha
    @tipo_cad = @tipo_cad_unico
    @cad_unico = @cad_unico_cliente
    @mcc = @mcc
    @qtd_maquininha = @qtd_maquininha
    @faturamento_cliente = @faturamento_cliente
    @razao_cliente = @razao_cliente
    @fantasia_cliente = @fantasia_cliente
    @email_cliente = @email_cliente
    @tipo_contato = @tipo_contato
    @cpf_contato = @cpf_contato
    @nome_contato = @nome_contato
    @tel_contato = @tel_contato
    @cel_contato = @cel_contato
    @email_contato = @email_contato
    @cep = @cep
    @ufisc = @ufisc
    @end_cidade = @end_cidade
    @tipo_logradouro = @tipo_logradouro
    @logradouro = @logradouro
    @num_logradouro = @num_logradouro
    @bairro_logradouro = @bairro_logradouro
    @nome_entrega = @nome_entrega
    @cel_entrega = @cel_entrega
    @email_entrega = @email_entrega
    @bank_list = @bank_list
    @tipo_conta = @tipo_conta
    @nro_agencia = @nro_agencia
    @dig_agencia = @digito_agencia
    @nro_conta = @nro_conta
    @dig_conta = @digito_conta


    # Gerar PDF usando Prawn
    pdf = Prawn::Document.new
    pdf.text "Cliente: #{@razao_cliente} | #{@fantasia_cliente}"
    pdf.text "--------------------------------"
    pdf.text "--------------------------------"
    pdf.text "*** Dados do Fornecedor ******"
    pdf.text "--------------------------------"
    pdf.text "Unidade: #{@unidade_fornecedor}"
    pdf.text "Vendedor: #{@vendedor_fornecedor}"
    pdf.text "Financiamento: #{@taxas_maquininha}"
    pdf.text "--------------------------------"
    pdf.text "*** Dados da Empresa ***********"
    pdf.text "--------------------------------"
    pdf.text "Cadastro único (CPF/CNPJ): #{@tipo_cad_unico} - #{@cad_unico_cliente}"
    pdf.text "MCC: #{@mcc}"
    pdf.text "Quantidade de Maquininhas: #{@qtd_maquininha}"
    pdf.text "Faturamento Mensal: #{@faturamento_cliente}"
    pdf.text "Razão Social: #{@razao_cliente}"
    pdf.text "Nome Fantasia: #{@fantasia_cliente}"
    pdf.text "E-mail da conta: #{@email_cliente}"
    pdf.text "--------------------------------"
    pdf.text "*** Inf. de Contato ************"
    pdf.text "--------------------------------"
    pdf.text "Tipo de Contato: #{@tipo_contato}"
    pdf.text "CPF do Contato: #{@cpf_contato}"
    pdf.text "Nome do Contato: #{@nome_contato}"
    pdf.text "Telefone do Contato: #{@tel_contato}"
    pdf.text "Celular do Contato: #{@cel_contato}"
    pdf.text "E-mail do Contato: #{@email_contato}"
    pdf.text "--------------------------------"
    pdf.text "*** End. e Entrega *************"
    pdf.text "--------------------------------"
    pdf.text "CEP: #{@cep}"
    pdf.text "UF + Cidade: #{@ufisc} | #{@end_cidade}"
    pdf.text "Logradouro: [ #{@tipo_logradouro} ] #{@logradouro}, #{@num_logradouro}"
    pdf.text "Bairro: #{@bairro_logradouro}"
    pdf.text "Quem vai receber: #{@nome_entrega}"
    pdf.text "Celular: #{@cel_entrega}"
    pdf.text "E-mail: #{@email_entrega}"
    pdf.text "--------------------------------"
    pdf.text "*** Dados Bancários ************"
    pdf.text "--------------------------------"
    pdf.text "Banco: #{@bank_list}"
    pdf.text "Tipo de conta: #{@tipo_conta}"
    pdf.text "Nro. da Agência: #{@nro_agencia} | Dígito: #{@dig_agencia}"
    pdf.text "Nro. da Conta: #{@nro_conta}| Dígito: #{@dig_conta}"
    pdf.text "--------------------------------"



    # Salvar o PDF em um arquivo temporário
    pdf_filename = Rails.root.join('tmp', 'formulario.pdf')
    pdf.render_file pdf_filename

    # Enviar o PDF por e-mail usando Action Mailer
    FormularioPdfMailer.send_pdf('1662.suporte@gmail.com', pdf_filename).deliver_now

    # Responder com uma mensagem ou redirecionar para uma página de confirmação
    flash[:notice] = 'PDF gerado e enviado por e-mail com sucesso!'
    redirect_to root_path
  end

  private

  # Método privado para definir os strong parameters
  def formulario_params
    params.require(:dados).permit!
  end
end
