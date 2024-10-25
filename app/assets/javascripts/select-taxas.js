function exibirValorRadio() {
    // Obter todos os elementos de radio button com o mesmo nome
    var opcoes = document.getElementsByName('gridRadios');

    // Loop através dos elementos de radio button
    for (var i = 0; i < opcoes.length; i++) {
        // Verificar se o radio button está selecionado
        if (opcoes[i].checked) {
            // Atribuir o valor do radio button selecionado ao campo de entrada
            document.getElementById('recoverTaxas').value = opcoes[i].value;
            break; // Encerrar o loop depois de encontrar o radio button selecionado
        }
    }
}