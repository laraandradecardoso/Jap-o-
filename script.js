// ==========================================================================
// CÓDIGO JAVASCRIPT NATIVO - BOTÃO "VOLTAR AO TOPO" (REQUISITO 14)
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    // REQUISITO 14: Criar o botão inteiramente pelo JS utilizando document.createElement()
    const topButton = document.createElement("button");

    // REQUISITO 14: Definir o texto ou símbolo do botão pelo JavaScript
    topButton.innerHTML = "&#9650;"; // Símbolo de seta para cima

    // REQUISITO 14: Adicionar classe CSS e texto de acessibilidade (aria-label)
    topButton.classList.add("back-to-top-btn");
    topButton.setAttribute("aria-label", "Voltar ao topo da página");

    // REQUISITO 14: Inserir o botão na página utilizando appendChild()
    document.body.appendChild(topButton);

    // REQUISITO 14: Adicionar evento de rolagem (scroll) com addEventListener()
    window.addEventListener("scroll", function () {
        // O botão aparece apenas se o usuário rolar mais de 300px para baixo
        if (window.scrollY > 300) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });

    // REQUISITO 14: Evento de clique para retornar ao topo com deslocamento suave (behavior: "smooth")
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
