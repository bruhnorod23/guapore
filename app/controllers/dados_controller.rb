class DadosController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create]  # Ignora verificação CSRF para ação create

  def create
    @dados = Dados.new(dados_params)

    if @dados.save
      render json: { message: 'Dados salvos com sucesso.' }, status: :created
    else
      render json: { error: @dados.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def dados_params
    params.require(:dados).permit(
      :unidade_fornecedor, :vendedor_fornecedor, :taxas_maquininha,
      :tipo_cad_unico, :cad_unico_cliente, :mcc, :qtd_maquininha,
      :faturamento_cliente, :razao_cliente, :fantasia_cliente, :email_cliente,
      :tipo_contato, :cpf_contato, :nome_contato, :tel_contato, :cel_contato,
      :email_contato, :cep, :ufisc, :end_cidade, :tipo_logradouro, :logradouro,
      :num_logradouro, :bairro_logradouro, :nome_entrega, :cel_entrega,
      :email_entrega, :bank_list, :tipo_conta, :nro_agencia, :digito_agencia,
      :nro_conta, :digito_conta
    )
  end

  def index
    @dados = Dados.all
  end

end
