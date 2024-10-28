document.addEventListener("DOMContentLoaded", function() {
  // Obtém referências para os selects
  const select1 = document.getElementById('unidadeFornecedor');
  const select2 = document.getElementById('vendedorFornecedor');

  // Mapeia as opções para cada região
  const opcoesPorRegiao = {
    IND: ['Escolha uma opção','Luciano', 'Alan', 'Victória','Axel','Jussara','Paulo'],
    CDZS: ['Escolha uma opção','Jaque', 'Omar'],
    CDAC: ['Escolha uma opção','Jakson','Aline']
  };

  // Atualiza as opções do select2 quando select1 muda
  select1.addEventListener('change', function() {
    const regiaoSelecionada = select1.value;
    const opcoes = opcoesPorRegiao[regiaoSelecionada];
    
    // Limpa as opções atuais do select2
    select2.innerHTML = '';

    // Adiciona as novas opções ao select2
    opcoes.forEach(function(opcao) {
      const option = document.createElement('option');
      option.textContent = opcao;
      select2.appendChild(option);
    });
  });

  // Dispare o evento change inicialmente para preencher o select2 com base na seleção inicial do select1
  select1.dispatchEvent(new Event('change'));

});