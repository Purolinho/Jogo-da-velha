var casa1 = document.getElementById("casa1")
var casa2 = document.getElementById("casa2")
var casa3 = document.getElementById("casa3")
var casa4 = document.getElementById("casa4")
var casa5 = document.getElementById("casa5")
var casa6 = document.getElementById("casa6")
var casa7 = document.getElementById("casa7")
var casa8 = document.getElementById("casa8")
var casa9 = document.getElementById("casa9")

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var img6 = document.getElementById("img6")
var img7 = document.getElementById("img7")
var img8 = document.getElementById("img8")
var img9 = document.getElementById("img9")

var fixa1 = 0
var fixa2 = 0
var fixa3 = 0
var fixa4 = 0
var fixa5 = 0
var fixa6 = 0
var fixa7 = 0
var fixa8 = 0
var fixa9 = 0

var jogadores = window.document.getElementById("jogadores")
var valor = window.document.getElementById("valor")

var x = 0
var o = 1
var jogo = 0

casa1.addEventListener("click", um)
casa2.addEventListener("click", dois)
casa3.addEventListener("click", tres)
casa4.addEventListener("click", quatro)
casa5.addEventListener("click", cinco)
casa6.addEventListener("click", seis)
casa7.addEventListener("click", sete)
casa8.addEventListener("click", oito)
casa9.addEventListener("click", nove)

function um() {

    
    if(fixa1 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img1.src = "imagens/circulo.png"
            fixa1++
            
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img1.src = "imagens/x.png"
            fixa1 = fixa1 + 2
        }  
    } else {
        alert("Esta casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function dois() {

    
    if(fixa2 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img2.src = "imagens/circulo.png"
            fixa2++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img2.src = "imagens/x.png"
            fixa2 = fixa2 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function tres() {

    
    if(fixa3 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img3.src = "imagens/circulo.png"
            fixa3++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img3.src = "imagens/x.png"
            fixa3 = fixa3 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000) 
    
}

function quatro() {

    
    if(fixa4 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img4.src = "imagens/circulo.png"
            fixa4++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img4.src = "imagens/x.png"
            fixa4 = fixa4 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function cinco() {

    
    if(fixa5 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img5.src = "imagens/circulo.png"
            fixa5++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img5.src = "imagens/x.png"
            fixa5 = fixa5 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function seis() {

    
    if(fixa6 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img6.src = "imagens/circulo.png"
            fixa6++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img6.src = "imagens/x.png"
            fixa6 = fixa6 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function sete() {

    
    if(fixa7 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img7.src = "imagens/circulo.png"
            fixa7++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img7.src = "imagens/x.png"
            fixa7 = fixa7 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
    
}

function oito() {

    
    if(fixa8 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img8.src = "imagens/circulo.png"
            fixa8++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img8.src = "imagens/x.png"
            fixa8 = fixa8 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
}

function nove() {

    
    if(fixa9 == 0) {
        if (jogo%2 == o) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 1</h2>`
            img9.src = "imagens/circulo.png"
            fixa9++
            
        } else if (jogo%2 == x) {
            jogo++
            jogadores.innerHTML = `<h2>Vez do Jogador 2</h2>`
            img9.src = "imagens/x.png"
            fixa9 = fixa9 + 2
        }  
    } else {
        alert("Está casa já foi jogada, tente outra")
    }
    setTimeout(clicou(),2000)
}

function clicou() {

    if (
        fixa1 == 1 && fixa2 == 1 && fixa3 == 1 ||
        fixa4 == 1 && fixa5 == 1 && fixa6 == 1 ||
        fixa7 == 1 && fixa8 == 1 && fixa9 == 1 ||

        fixa1 == 1 && fixa4 == 1 && fixa7 == 1 ||
        fixa2 == 1 && fixa5 == 1 && fixa8 == 1 ||
        fixa3 == 1 && fixa6 == 1 && fixa9 == 1 ||

        fixa1 == 1 && fixa5 == 1 && fixa9 == 1 ||
        fixa3 == 1 && fixa5 == 1 && fixa7 == 1

        

    ) { fixa1 = 0
        fixa2 = 0
        fixa3 = 0
        fixa4 = 0
        fixa5 = 0
        fixa6 = 0
        fixa7 = 0
        fixa8 = 0
        fixa9 = 0

       img1.src = 'imagens/0c0c0c-200x200.png'
       img2.src = 'imagens/0c0c0c-200x200.png'
       img3.src = 'imagens/0c0c0c-200x200.png'
       img4.src = 'imagens/0c0c0c-200x200.png'
       img5.src = 'imagens/0c0c0c-200x200.png'
       img6.src = 'imagens/0c0c0c-200x200.png'
       img7.src = 'imagens/0c0c0c-200x200.png'
       img8.src = 'imagens/0c0c0c-200x200.png'
       img9.src = 'imagens/0c0c0c-200x200.png'
        
        alert(" 🎉 Vitória do Jogador número 2! 🎉")}

    else if (
        fixa1 == 2 && fixa2 == 2 && fixa3 == 2 ||
        fixa4 == 2 && fixa5 == 2 && fixa6 == 2 ||
        fixa7 == 2 && fixa8 == 2 && fixa9 == 2 ||

        fixa1 == 2 && fixa4 == 2 && fixa7 == 2 ||
        fixa2 == 2 && fixa5 == 2 && fixa8 == 2 ||
        fixa3 == 2 && fixa6 == 2 && fixa9 == 2 ||

        fixa1 == 2 && fixa5 == 2 && fixa9 == 2 ||
        fixa3 == 2 && fixa5 == 2 && fixa7 == 2

    ) { fixa1 = 0
        fixa2 = 0
        fixa3 = 0
        fixa4 = 0
        fixa5 = 0
        fixa6 = 0
        fixa7 = 0
        fixa8 = 0
        fixa9 = 0

       img1.src = 'imagens/0c0c0c-200x200.png'
       img2.src = 'imagens/0c0c0c-200x200.png'
       img3.src = 'imagens/0c0c0c-200x200.png'
       img4.src = 'imagens/0c0c0c-200x200.png'
       img5.src = 'imagens/0c0c0c-200x200.png'
       img6.src = 'imagens/0c0c0c-200x200.png'
       img7.src = 'imagens/0c0c0c-200x200.png'
       img8.src = 'imagens/0c0c0c-200x200.png'
       img9.src = 'imagens/0c0c0c-200x200.png'
       
       alert(" 🎉 Vitória do Jogador número 1! 🎉")}
       else if (
        fixa1 >= 1 && fixa2 >= 1 && fixa3 >= 1 &&
        fixa4 >= 1 && fixa5 >= 1 && fixa6 >= 1 &&
        fixa7 >= 1 && fixa8 >= 1 && fixa9 >= 1
       ) {

        fixa1 = 0
        fixa2 = 0
        fixa3 = 0
        fixa4 = 0
        fixa5 = 0
        fixa6 = 0
        fixa7 = 0
        fixa8 = 0
        fixa9 = 0

       img1.src = 'imagens/0c0c0c-200x200.png'
       img2.src = 'imagens/0c0c0c-200x200.png'
       img3.src = 'imagens/0c0c0c-200x200.png'
       img4.src = 'imagens/0c0c0c-200x200.png'
       img5.src = 'imagens/0c0c0c-200x200.png'
       img6.src = 'imagens/0c0c0c-200x200.png'
       img7.src = 'imagens/0c0c0c-200x200.png'
       img8.src = 'imagens/0c0c0c-200x200.png'
       img9.src = 'imagens/0c0c0c-200x200.png'

        alert("Empate⚔️")
        
       }


}



