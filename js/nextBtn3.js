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

  document.getElementById('recoverFornecedor').placeholder = unidadeFornecedor;
  document.getElementById('recoverVendedor').placeholder = vendedorFornecedor;
  document.getElementById("recoverTaxas").placeholder = taxasMaquininha;

  // tela dados empresa

  document.getElementById("mcc");
  document.getElementById("qtdMaquininha");
  document.getElementById("recoverCadunico").placeholder = " [ " + tipoCadUnico + " ] " + cadUnicoCliente;
  document.getElementById("recoverFaturamento").placeholder = faturamentoCliente;
  document.getElementById("recoverRazao").placeholder = razaoCliente;
  document.getElementById("recoverFantasia").placeholder = fantasiaCliente;
  document.getElementById("recoverEmail").placeholder = emailCliente;

  // tela infoos de contato

  document.getElementById("recoverTipoContato").placeholder = tipoContato;
  document.getElementById("recoverCpfcontato").placeholder = cpfContato;
  document.getElementById("recoverNomeContato").placeholder = nomeContato;
  document.getElementById("recoverTelContato").placeholder = telContato ? telContato : "Não preenchido";;
  document.getElementById("recoverCelContato").placeholder = celContato ? telContato : "Não preenchido";;
  document.getElementById("recoverEmailContato").placeholder = emailContato;   

  // tela end. e entrega

  document.getElementById("recoverCep").placeholder = cep;
  document.getElementById("recoverEstado").placeholder = uFisc;
  document.getElementById("recoverCidade").placeholder = endCidade;
  document.getElementById("recoverLogradouro").placeholder = " [ " + tipoLogradouro + " ] " + logradouro + " , " + numLogradouro; 
  document.getElementById("recoverBairro").placeholder = bairroLogradouro;
  document.getElementById("recoverReceptor").placeholder = nomeEntrega;
  document.getElementById("recoverCelReceptor").placeholder = celEntrega;
  document.getElementById("recoverEmailReceptor").placeholder = emailEntrega;

  // tela dados bancários

  document.getElementById("recoverBanco").placeholder = bankList;
  document.getElementById("recoverTipoConta").placeholder = tipoConta;
  document.getElementById("recoverNroAgencia").placeholder = nroAgencia;
  document.getElementById("recoverDigitoAgencia").placeholder = digitoAgencia;
  document.getElementById("recoverNroConta").placeholder = nroConta;
  document.getElementById("recoverDigitoConta").placeholder = digitoConta;

}
