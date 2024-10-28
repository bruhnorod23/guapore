document.addEventListener("DOMContentLoaded", function() {
// Função para recuperar os dados do localStorage e atribuí-los aos inputs
function recDadosLocal() {
    // Recuperar os dados do localStorage
    const formDataJSON = localStorage.getItem("formData");

    // Verificar se existem dados armazenados
    if (formDataJSON) {
        // Converter os dados de JSON de volta para um objeto
        const formData = JSON.parse(formDataJSON);

        // Atribuir os valores aos inputs correspondentes
        document.getElementById("recoverFornecedor").value = formData.unidadeFornecedor;
        document.getElementById("recoverVendedor").value = formData.vendedorFornecedor;
        document.getElementById("recoverTaxas").value = formData.taxasMaquininha;

        
        document.getElementById("mcc");
        document.getElementById("qtdMaquininha");
        document.getElementById("recoverCadunico").value = " [ " + tipoCadUnico + " ] " + cadUnicoCliente;
        document.getElementById("recoverFaturamento").value = formData.faturamentoCliente;
        document.getElementById("recoverRazao").value = formData.razaoCliente;
        document.getElementById("recoverFantasia").value = formData.fantasiaCliente;
        document.getElementById("recoverEmail").value = formData.emailCliente;

        document.getElementById("recoverTipoContato").value = formData.tipoContato;
        document.getElementById("recoverCpfcontato").value = formData.cpfContato;
        document.getElementById("recoverNomeContato").value = formData.nomeContato;
        document.getElementById("recoverTelContato").value = formData.telContato ? formData.telContato : "Não preenchido";;
        document.getElementById("recoverCelContato").value = formData.celContato;
        document.getElementById("recoverEmailContato").value = formData.emailContato;   

        document.getElementById("recoverBanco").value = formData.bankList;
        document.getElementById("recoverTipoConta").value = formData.tipoConta;
        document.getElementById("recoverNroAgencia").value = formData.nroAgencia;
        document.getElementById("recoverDigitoAgencia").value = formData.digitoAgencia;
        document.getElementById("recoverNroConta").value = formData.nroConta;
        document.getElementById("recoverDigitoConta").value = formData.digitoConta;

        document.getElementById("recoverCep").value = formData.cep;
        document.getElementById("recoverEstado").value = formData.uFisc;
        document.getElementById("recoverCidade").value = formData.endCidade;
        document.getElementById("recoverLogradouro").value = " [ " + tipoLogradouro + " ] " + logradouro + " , " + numLogradouro; 
        document.getElementById("recoverBairro").value = formData.bairroLogradouro;
        document.getElementById("recoverReceptor").value = formData.nomeEntrega;
        document.getElementById("recoverCelReceptor").value = formData.celEntrega;
        document.getElementById("recoverEmailReceptor").value = formData.emailEntrega;

    }
}

// Event listener para o botão que aciona a função de recuperação dos dados do localStorage
document.getElementById("botaoRecuperarDados").addEventListener("click", function() {
    recDadosLocal();
});
});
