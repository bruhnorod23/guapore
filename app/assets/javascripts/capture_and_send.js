$('#enviarFormularioBtn').on('click', function() {
    
       // Suponha que este código seja acionado ao clicar em um botão "Salvar" ou algo semelhante
    var dados = {
      dados: {
        unidade_fornecedor: $('#unidadeFornecedor').val(),
        vendedor_fornecedor: $('#vendedorFornecedor').val(),
        taxas_maquininha: $('input[name="gridRadios"]:checked').val(),
        tipo_cad_unico: $('#tipoCadUnico').val(),
        cad_unico_cliente: $('#cadUnicoCliente').val(),
        mcc: $('#mcc').val(),
        qtd_maquininha: $('#qtdMaquininha').val(),
        faturamento_cliente: $('#faturamentoCliente').val(),
        razao_cliente: $('#razaoCliente').val(),
        fantasia_cliente: $('#fantasiaCliente').val(),
        email_cliente: $('#emailCliente').val(),
        tipo_contato: $('#tipoContato').val(),
        cpf_contato: $('#cpfContato').val(),
        nome_contato: $('#nomeContato').val(),
        tel_contato: $('#telContato').val(),
        cel_contato: $('#celContato').val(),
        email_contato: $('#emailContato').val(),
        cep: $('#cep').val(),
        ufisc: $('#uFisc').val(),
        end_cidade: $('#endCidade').val(),
        tipo_logradouro: $('#tipoLogradouro').val(),
        logradouro: $('#logradouro').val(),
        num_logradouro: $('#numLogradouro').val(),
        bairro_logradouro: $('#bairroLogradouro').val(),
        nome_entrega: $('#nomeEntrega').val(),
        cel_entrega: $('#celEntrega').val(),
        email_entrega: $('#emailEntrega').val(),
        bank_list: $('#bankList').val(),
        tipo_conta: $('#tipoConta').val(),
        nro_agencia: $('#nroAgencia').val(),
        digito_agencia: $('#digitoAgencia').val(),
        nro_conta: $('#nroConta').val(),
        digito_conta: $('#digitoConta').val()
      }
    };
  
   $.ajax({
      type: 'POST',
      url: '/dados',  // Endpoint para salvar os dados
      contentType: 'application/json',
      data: JSON.stringify(dados),
      success: function(response) {
        alert(response.message);  // Exibe mensagem de sucesso
       //  Aqui você pode redirecionar ou fazer qualquer outra ação após salvar os dados
      },
      error: function(xhr, status, error) {
        console.error('Erro ao salvar os dados:', error);
       //  Trate o erro conforme necessário
      }
    });

  
});
