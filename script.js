document.addEventListener('DOMContentLoaded', () => {
    tabs()
})

function tabs() {
    // Categorias
    const categorias = document.querySelectorAll('.tab-categoria')
    const primeiraCategoria = document.querySelector('.tab-categoria-1')
    const segundaCategoria = document.querySelector('.tab-categoria-2')
    const terceiraCategoria = document.querySelector('.tab-categoria-3')

    // Conteudos
    const conteudos = document.querySelectorAll('.tab-conteudo')
    const primeiroConteudo = document.querySelector('.tab-conteudo-1')
    const segundoConteudo = document.querySelector('.tab-conteudo-2')
    const terceiroConteudo = document.querySelector('.tab-conteudo-3')

    // Eventos
    primeiraCategoria.addEventListener('click', () => {
        removeConteudoVisivel()
        removeCategoriaAtiva()

        primeiraCategoria.classList.add('tab-categoria-ativa')
        primeiroConteudo.classList.add('tab-conteudo-visivel')
    })

    segundaCategoria.addEventListener('click', () => {
        removeConteudoVisivel()
        removeCategoriaAtiva()

        segundaCategoria.classList.add('tab-categoria-ativa')
        segundoConteudo.classList.add('tab-conteudo-visivel')
    })

    terceiraCategoria.addEventListener('click', () => {
        removeConteudoVisivel()
        removeCategoriaAtiva()

        terceiraCategoria.classList.add('tab-categoria-ativa')
        terceiroConteudo.classList.add('tab-conteudo-visivel')
    })


    // Funções
    function removeConteudoVisivel() {
        conteudos.forEach(conteudo => {
            conteudo.classList.remove('tab-conteudo-visivel')
        })
    }

    function removeCategoriaAtiva() {
        categorias.forEach(categoria => {
            categoria.classList.remove('tab-categoria-ativa')
        })
    }
}