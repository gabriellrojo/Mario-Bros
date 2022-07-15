const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const botao = document.querySelector(".botao")
const botaoSair = document.querySelector(".botao-sair")
const musica = document.querySelector(".song")

document.addEventListener("keydown", () => {
    mario.classList.add("jump")
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 800)
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom) /*getComputedStyle: me fornece a info de qualquer componente*/
    
    if(pipePosition <= 120 && marioPosition < 110 && pipePosition > 0) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        mario.src = "./img/game-over.png"
        mario.style.width = "80px"
        mario.style.left = "40px"
        botao.style.display = "inline"
        botaoSair.style.display = "inline"
        musica.src = "./songs/Super Mario Bros - game over song.mp3"



        clearInterval(loop)
        
    }
}, 10)

botao.addEventListener("click", () => {
    location.reload(true)
})

