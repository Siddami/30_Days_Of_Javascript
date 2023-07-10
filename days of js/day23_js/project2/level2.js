//get container and p elements
const container = document.querySelector('div')
const info = document.querySelector('.info')
const ascii = document.querySelector('.numbers')

info.textContent = 'Press Any Keyboard Key'

//style div
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.height = '90vh'

//style intro p tag
info.style.width = '30%'
info.style.display = 'flex'
info.style.flexWrap = 'wrap'
info.style.flexDirection = 'row'
info.style.justifyContent = 'center'
info.style.alignItems = 'center'
info.style.borderRadius = '5px'
info.style.border = '1px solid grey'
info.style.boxShadow = '2px  2px grey'
info.style.fontSize = '3rem'
info.style.fontWeight = 'bolder'
info.style.padding = '20px'

//keyboard event function

document.body.addEventListener('keypress', e => {
    info.innerHTML = `You Pressed <span>${e.key}</span>`
    const span = document.querySelector('span')
    span.style.margin = '8px'
    span.style.color = 'green'
    span.style.fontSize = '3rem'
    ascii.textContent = e.keyCode

    //style ascii button
    ascii.style.display = 'flex'
    ascii.style.flexDirection = 'row'
    ascii.style.justifyContent = 'center'
    ascii.style.alignItems = 'center'
    ascii.style.margin = '5px auto'
    ascii.style.padding = '20px'
    ascii.style.border = '1px solid grey'
    ascii.style.borderRadius = '5px'
    ascii.style.boxShadow = '2px 2px grey'
    ascii.style.fontSize = '5rem'
    ascii.style.fontWeight = 'bolder'
    ascii.style.color = 'green'
})
