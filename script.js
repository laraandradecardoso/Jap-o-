// ==========================================================================
// Item 14 do Requisito: Criação do Botão "Voltar ao Topo" via JavaScript
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. Criar o elemento do botão dinamicamente
    const btnTopo = document.createElement("button");

    // 2. Definir o conteúdo/símbolo e atributos de acessibilidade
    btnTopo.innerHTML = "&#9650;"; // Símbolo de seta para cima (▲)
    btnTopo.setAttribute("aria-label", "Voltar ao topo da página");

    // 3. Adicionar classe para estilização CSS
    btnTopo.classList.add("btn-topo");

    // 4. Inserir o botão no corpo (body) do documento
    document.body.appendChild(btnTopo);

    // 5. Mostrar/Ocultar o botão baseado na rolagem da página
    window.addEventListener("scroll", function () {
        // Exibe o botão quando a rolar mais de 300px para baixo
        if (window.scrollY > 300) {
            btnTopo.classList.add("visivel");
        } else {
            btnTopo.classList.remove("visivel");
        }
    });

    // 6. Adicionar evento de clique para realizar a rolagem suave até o topo
    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
