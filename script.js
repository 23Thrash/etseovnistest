// Função para abrir e fechar as perguntas frequentes em estilo acordeão
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('#faq .faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Fecha todos os itens
            faqItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove('active');
                }
            });

            // Alterna o item clicado
            item.classList.toggle('active');
        });
    });
});

// Validação do formulário de contato
document.querySelector('#contato form').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Evita o envio do formulário
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); // Evita o envio do formulário
        return;
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
CSS Atualizado para o Acordeão
Você também precisará adicionar alguns estilos CSS para que o acordeão funcione corretamente.

css
Copiar código
/* FAQ */
.faq-item {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    transition: background-color 0.3s;
}

.faq-item:hover {
    background-color: #f0f0f0;
}

.faq-content {
    display: none;
    padding-top: 10px;
}

.faq-item.active .faq-content {
    display: block;
}