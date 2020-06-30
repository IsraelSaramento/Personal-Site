const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function() {
        const aulaID = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${aulaID}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

const modal = document.getElementById('modal')
const fullscreen = document.getElementById('fullscreen')

fullscreen.addEventListener('click', function(){
    modal.requestFullscreen()
})

// document.querySelector('.fullscreen').addEventListener("click", function() {
//     modal.classList.contains('.fullscreen')
// })