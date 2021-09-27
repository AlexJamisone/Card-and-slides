const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '2ecc71', '#06171e', '#113d3c', '#015351', '#fd7d00', '#bfd5c9', '#05a3a4', '#65ab6f', '#adc8ce']
const SQUARES__NUMBER = 500;

for (let i = 0; i < SQUARES__NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
} 