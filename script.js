
// Interatividade do formulário de frete
const form = document.getElementById('frete-form');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const saida = document.getElementById('saida').value.trim();
    const destino = document.getElementById('destino').value.trim();
    const horario = document.getElementById('horario').value;

    if (!saida || !destino || !horario) {
        resposta.textContent = 'Por favor, preencha todos os campos.';
        resposta.style.color = '#b71c1c';
        return;
    }

    resposta.textContent = `Solicitação enviada! Saída: ${saida}, Destino: ${destino}, Horário: ${horario}. Aguarde o contato do freteiro.`;
    resposta.style.color = '#388e3c';
    form.reset();
});

// Botão de contato WhatsApp
const btnContato = document.getElementById('btn-contato');
btnContato.addEventListener('click', function() {
    // Número fictício, altere para o número real se desejar
    const numero = '5599999999999';
    const mensagem = encodeURIComponent('Olá! Gostaria de solicitar um frete com a DUDU Frete.');
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});co