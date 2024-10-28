document.addEventListener("DOMContentLoaded", function() {
  // Objeto para armazenar todos os dados
  var formData = {};

  // Seletor dos botões "Avançar"
  var nextBtn1 = document.getElementById("nextBtn3");
  var nextBtn2 = document.getElementById("nextBtn4");
  var nextBtn3 = document.getElementById("nextBtn5");
  var nextBtn4 = document.getElementById("nextBtn6");
  var nextBtn5 = document.getElementById("nextBtn7");
  var nextBtn6 = document.getElementById("nextBtn8");

  // Adicionando um evento de clique ao botão "Avançar" da primeira tela
  nextBtn1.addEventListener("click", function() {
    // Recuperando os valores dos campos de entrada da primeira tela
    var unidadeFornecedor = document.getElementById("unidadeFornecedor").value;
    var vendedorFornecedor = document.getElementById("vendedorFornecedor").value;
    var taxasMaquininha = document.querySelector('input[name="gridRadios"]:checked').value;

    // Atualizando o objeto formData com os dados da primeira tela
    formData.unidadeFornecedor = unidadeFornecedor;
    formData.vendedorFornecedor = vendedorFornecedor;
    formData.taxasMaquininha = taxasMaquininha;
  });

  // Adicionando um evento de clique ao botão "Avançar" da segunda tela
  nextBtn2.addEventListener("click", function() {
    // Recuperando os valores dos campos de entrada da segunda tela
    var tipoCadUnico = document.getElementById("tipoCadUnico").value;
    var cadUnicoCliente = document.getElementById("cadUnicoCliente").value;
    var mcc = document.getElementById("mcc").value;
    var qtdMaquininha = document.getElementById("qtdMaquininha").value;
    var faturamentoCliente = document.getElementById("faturamentoCliente").value;
    var razaoCliente = document.getElementById("razaoCliente").value;
    var fantasiaCliente = document.getElementById("fantasiaCliente").value;
    var emailCliente = document.getElementById("emailCliente").value;

    // Atualizando o objeto formData com os dados da segunda tela
    formData.tipoCadUnico = tipoCadUnico;
    formData.cadUnicoCliente = cadUnicoCliente;
    formData.faturamentoCliente = faturamentoCliente;
    formData.razaoCliente = razaoCliente;
    formData.fantasiaCliente = fantasiaCliente;
    formData.emailCliente = emailCliente;
    formData.mcc = mcc;
    formData.qtdMaquininha = qtdMaquininha;

  });

  nextBtn3.addEventListener("click", function() {
    // Recuperando os valores dos campos de entrada da primeira tela
    var tipoContato = document.getElementById("tipoContato").value;
    var cpfContato = document.getElementById("cpfContato").value;
    var nomeContato = document.getElementById("nomeContato").value;
    var telContato = document.getElementById("telContato").value;
    var celContato = document.getElementById("celContato").value;
    var emailContato = document.getElementById("emailContato").value;

    // Atualizando o objeto formData com os dados da primeira tela
    formData.tipoContato = tipoContato;
    formData.cpfContato = cpfContato;
    formData.nomeContato = nomeContato;
    formData.telContato = telContato ? formData.telContato : "Não preenchido"; 
    formData.celContato = celContato;
    formData.emailContato = emailContato;

  });

  nextBtn4.addEventListener("click", function() {
    // Recuperando os valores dos campos de entrada da primeira tela
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

    // Atualizando o objeto formData com os dados da primeira tela
    formData.cep = cep;
    formData.uFisc = uFisc;
    formData.endCidade = endCidade;
    formData.tipoLogradouro = tipoLogradouro;
    formData.logradouro = logradouro;
    formData.numLogradouro = numLogradouro;
    formData.bairroLogradouro = bairroLogradouro;
    formData.nomeEntrega = nomeEntrega;
    formData.celEntrega = celEntrega;
    formData.emailEntrega = emailEntrega;
    
  });

  nextBtn5.addEventListener("click", function() {
    // Recuperando os valores dos campos de entrada da primeira tela
    var bankList = document.getElementById("bankList").value;
    var tipoConta = document.getElementById("tipoConta").value;
    var nroAgencia = document.getElementById("nroAgencia").value;
    var digitoAgencia = document.getElementById("digitoAgencia").value;
    var nroConta = document.getElementById("nroConta").value;
    var digitoConta = document.getElementById("digitoConta").value;

    // Atualizando o objeto formData com os dados da primeira tela
    formData.bankList = bankList;
    formData.tipoConta = tipoConta;
    formData.nroAgencia = nroAgencia;
    formData.digitoAgencia = digitoAgencia;
    formData.nroConta = nroConta;
    formData.digitoConta = digitoConta;

     // Convertendo o objeto em uma string JSON
     var formDataJSON = JSON.stringify(formData);

     // Armazenando a string JSON no localStorage
     localStorage.setItem('formData', formDataJSON);
    
  });
});
