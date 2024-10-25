# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_07_16_125645) do
  create_table "dados", force: :cascade do |t|
    t.string "unidade_fornecedor"
    t.string "vendedor_fornecedor"
    t.string "taxas_maquininha"
    t.string "tipo_cad_unico"
    t.string "cad_unico_cliente"
    t.string "mcc"
    t.string "qtd_maquininha"
    t.string "faturamento_cliente"
    t.string "razao_cliente"
    t.string "fantasia_cliente"
    t.string "email_cliente"
    t.string "tipo_contato"
    t.string "cpf_contato"
    t.string "nome_contato"
    t.string "tel_contato"
    t.string "cel_contato"
    t.string "email_contato"
    t.string "cep"
    t.string "ufisc"
    t.string "end_cidade"
    t.string "tipo_logradouro"
    t.string "logradouro"
    t.string "num_logradouro"
    t.string "bairro_logradouro"
    t.string "nome_entrega"
    t.string "cel_entrega"
    t.string "email_entrega"
    t.string "bank_list"
    t.string "tipo_conta"
    t.string "nro_agencia"
    t.string "digito_agencia"
    t.string "nro_conta"
    t.string "digito_conta"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
