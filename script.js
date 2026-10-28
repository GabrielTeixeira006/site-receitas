document.addEventListener("DOMContentLoaded", function () {

    const botoesFiltro = document.querySelectorAll(".filtro");
    const receitas = document.querySelectorAll(".receita-card");

    botoesFiltro.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const filtro = botao.dataset.filtro;

            receitas.forEach(function (receita) {

                const tipo = receita.dataset.tipo;

                if (filtro === "todos" || filtro === tipo) {
                    receita.classList.remove("d-none");
                } else {
                    receita.classList.add("d-none");
                }

            });

            botoesFiltro.forEach(function (item) {
                item.classList.remove("btn-success");
                item.classList.add("btn-outline-success");
            });

            botao.classList.remove("btn-outline-success");
            botao.classList.add("btn-success");

        });

    });

});

// Destaca a opção selecionada no menu
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-principal .nav-link");

    function atualizarMenu() {
        const pagina = window.location.pathname.split("/").pop();
        const secao = window.location.hash || "#inicio";

        links.forEach(function (link) {
            const destino = link.getAttribute("href");

            const ativo = pagina === "receitas.html"
                ? destino === "receitas.html"
                : destino === secao;

            link.classList.toggle("active", ativo);
        });
    }

    window.addEventListener("hashchange", atualizarMenu);
    atualizarMenu();
});