const button = document.getElementById('change-colour')
const currentColour = document.querySelector('.colour-hex')

button.addEventListener('click', function(){
  let value1 = Math.floor(Math.random() * 255)
  let value2 = Math.floor(Math.random() * 255)
  let value3 = Math.floor(Math.random() * 255)
  document.body.style.backgroundColor = `rgba(${value1},${value2},${value3})`
  currentColour.textContent = `rgb(${value1},${value2},${value3})`
})