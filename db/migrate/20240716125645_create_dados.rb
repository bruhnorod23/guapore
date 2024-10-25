class CreateDados < ActiveRecord::Migration[7.1]
  def change
    create_table :dados do |t|
      t.string :unidade_fornecedor
      t.string :vendedor_fornecedor
      t.string :taxas_maquininha
      t.string :tipo_cad_unico
      t.string :cad_unico_cliente
      t.string :mcc
      t.string :qtd_maquininha
      t.string :faturamento_cliente
      t.string :razao_cliente
      t.string :fantasia_cliente
      t.string :email_cliente
      t.string :tipo_contato
      t.string :cpf_contato
      t.string :nome_contato
      t.string :tel_contato
      t.string :cel_contato
      t.string :email_contato
      t.string :cep
      t.string :ufisc
      t.string :end_cidade
      t.string :tipo_logradouro
      t.string :logradouro
      t.string :num_logradouro
      t.string :bairro_logradouro
      t.string :nome_entrega
      t.string :cel_entrega
      t.string :email_entrega
      t.string :bank_list
      t.string :tipo_conta
      t.string :nro_agencia
      t.string :digito_agencia
      t.string :nro_conta
      t.string :digito_conta

      t.timestamps
    end
  end
end
