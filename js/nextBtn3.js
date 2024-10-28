// JavaScript para preparar a tela de revisão

function revisarDados() {
  // Coletar dados do formulário -----------------------------------------------

  //tela fornecedor

  var unidadeFornecedor = document.getElementById('unidadeFornecedor').value;
  var vendedorFornecedor = document.getElementById('vendedorFornecedor').value;
  var taxasMaquininha = document.querySelector('input[name="gridRadios"]:checked').value;

  //tela dados empresa

  var tipoCadUnico = document.getElementById("tipoCadUnico").value;
  var cadUnicoCliente = document.getElementById("cadUnicoCliente").value;
  var mcc = document.getElementById("mcc").value;
  var qtdMaquininha = document.getElementById("qtdMaquininha").value;
  var faturamentoCliente = document.getElementById("faturamentoCliente").value;
  var razaoCliente = document.getElementById("razaoCliente").value;
  var fantasiaCliente = document.getElementById("fantasiaCliente").value;
  var emailCliente = document.getElementById("emailCliente").value;

  // tela infos de contato

  var tipoContato = document.getElementById("tipoContato").value;
  var cpfContato = document.getElementById("cpfContato").value;
  var nomeContato = document.getElementById("nomeContato").value;
  var telContato = document.getElementById("telContato").value;
  var celContato = document.getElementById("celContato").value;
  var emailContato = document.getElementById("emailContato").value;

  // tela end. e entrega

  var cep = document.getElementById("cep").value;
  var uFisc = document.getElementById("uFisc").value;
  var endCidade = document.getElementById("endCidade").value;
  var tipoLogradouro = document.getElementById("tipoLogradouro").value;
  var logradouro = document.getElementById("logradouro").value;
  var numLogradouro = document.getElementById("numLogradouro").value;
  var bairroLogradouro = document.getElementById("bairroLogradouro").value;
  var nomeEntrega = document.getElementById("nomeEntrega").value;
  var celEntrega = document.getElementById("celEntrega").value;
  var emailEntrega = document.getElementById("emailEntrega").value;

  // tela dados bancários

  var bankList = document.getElementById("bankList").value;
  var tipoConta = document.getElementById("tipoConta").value;
  var nroAgencia = document.getElementById("nroAgencia").value;
  var digitoAgencia = document.getElementById("digitoAgencia").value;
  var nroConta = document.getElementById("nroConta").value;
  var digitoConta = document.getElementById("digitoConta").value;

  // Inserir dados na tela de revisão ----------------------------------------

  // tela fornecedor 

  document.getElementById('recoverFornecedor').value = unidadeFornecedor;
  document.getElementById('recoverVendedor').value = vendedorFornecedor;
  document.getElementById("recoverTaxas").value = taxasMaquininha;

  // tela dados empresa

  document.getElementById("mcc");
  document.getElementById("qtdMaquininha");
  document.getElementById("recoverCadunico").value = " [ " + tipoCadUnico + " ] " + cadUnicoCliente;
  document.getElementById("recoverFaturamento").value = faturamentoCliente;
  document.getElementById("recoverRazao").value = razaoCliente;
  document.getElementById("recoverFantasia").value = fantasiaCliente;
  document.getElementById("recoverEmail").value = emailCliente;

  // tela infoos de contato

  document.getElementById("recoverTipoContato").value = tipoContato;
  document.getElementById("recoverCpfcontato").value = cpfContato;
  document.getElementById("recoverNomeContato").value = nomeContato;
  document.getElementById("recoverTelContato").value = telContato ? telContato : "Não preenchido";;
  document.getElementById("recoverCelContato").value = celContato ? telContato : "Não preenchido";;
  document.getElementById("recoverEmailContato").value = emailContato;   

  // tela end. e entrega

  document.getElementById("recoverCep").value = cep;
  document.getElementById("recoverEstado").value = uFisc;
  document.getElementById("recoverCidade").value = endCidade;
  document.getElementById("recoverLogradouro").value = " [ " + tipoLogradouro + " ] " + logradouro + " , " + numLogradouro; 
  document.getElementById("recoverBairro").value = bairroLogradouro;
  document.getElementById("recoverReceptor").value = nomeEntrega;
  document.getElementById("recoverCelReceptor").value = celEntrega;
  document.getElementById("recoverEmailReceptor").value = emailEntrega;

  // tela dados bancários

  document.getElementById("recoverBanco").value = bankList;
  document.getElementById("recoverTipoConta").value = tipoConta;
  document.getElementById("recoverNroAgencia").value = nroAgencia;
  document.getElementById("recoverDigitoAgencia").value = digitoAgencia;
  document.getElementById("recoverNroConta").value = nroConta;
  document.getElementById("recoverDigitoConta").value = digitoConta;

}
