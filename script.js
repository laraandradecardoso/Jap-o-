// ===================================================
// BOTÃO "VOLTAR AO TOPO" (Seção 14)
// Criado 100% via JavaScript Nativo
// ===================================================

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Criar o elemento button (Seção 14)
    const btnTopo = document.createElement("button");

    // 2. Definir o texto/símbolo do botão (Seção 14)
    btnTopo.innerHTML = "▲ Topo";

    // 3. Adicionar classe para estilização CSS (Seção 14)
    btnTopo.classList.add("btn-topo");

    // 4. Adicionar atributo de acessibilidade aria-label (Seção 14)
    btnTopo.setAttribute("aria-label", "Voltar ao topo da página");

    // 5. Inserir o botão no final do body (Seção 14)
    document.body.appendChild(btnTopo);

    // 6. Evento para monitorar a rolagem da página (Seção 14)
    window.addEventListener("scroll", function () {
        // Aparece somente após rolar 300px
        if (window.scrollY > 300) {
            btnTopo.classList.add("visivel");
        } else {
            btnTopo.classList.remove("visivel");
        }
    });

    // 7. Evento de clique para rolar suavemente até o topo (Seção 14)
    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Deslocamento suave (Seção 14)
        });
    });
});
