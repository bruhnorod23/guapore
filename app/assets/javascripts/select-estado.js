document.addEventListener("DOMContentLoaded", function() {
  // Obtém referências para os selects
  const ufSelect = document.getElementById('uFisc');
  const cidadeSelect = document.getElementById('endCidade');

  // Faz uma solicitação à API do IBGE para obter a lista de UF
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(ufs => {
      // Filtra os estados para incluir apenas RO, AC e AM
      const estadosFiltrados = ufs.filter(uf => ['RO', 'AC', 'AM'].includes(uf.sigla));
      
      // Preenche o select de UF com os dados filtrados
      estadosFiltrados.forEach(uf => {
        const option = document.createElement('option');
        option.textContent = uf.nome;
        option.value = uf.sigla;
        ufSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Erro ao recuperar UF:', error);
    });

  // Define um evento de change no select de UF para carregar cidades
  ufSelect.addEventListener('change', function() {
    const ufSigla = ufSelect.value;
    cidadeSelect.innerHTML = ''; // Limpa as opções de cidade

    // Faz uma solicitação à API do IBGE para obter a lista de cidades da UF selecionada
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSigla}/municipios`)
      .then(response => response.json())
      .then(cidades => {
        // Preenche o select de cidade com os dados retornados pela API
        cidades.forEach(cidade => {
          const option = document.createElement('option');
          option.textContent = cidade.nome;
          cidadeSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Erro ao recuperar cidades:', error);
      });
  });

  // Dispara o evento change inicialmente para preencher o select de cidade com base na UF selecionada
  ufSelect.dispatchEvent(new Event('change'));
});
