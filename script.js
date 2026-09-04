// Alternar Tema Claro/Escuro
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Modo Claro';
    }
});

// Ação do Botão "Ver Mais" (Expande informações no próprio card)
function toggleInfo() {
    const extraInfo = document.getElementById('extra-info');
    const btnReadMore = document.getElementById('btn-read-more');

    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        btnReadMore.textContent = 'Ver Menos';
    } else {
        extraInfo.classList.add('hidden');
        btnReadMore.textContent = 'Ver Mais';
    }
}

// Ação do Botão "Saiba Mais" (Exibe um alerta interativo com suporte)
function knowMore() {
    alert("Para mais informações sobre modelos, agendamento de test-ride e fichas técnicas completas, visite a concessionária mais próxima ou entre em contato pelo nosso atendimento.");
}