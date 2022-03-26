const painting = document.querySelector('.painting');
const paletteBlue = document.querySelector('#blue');
const paletteRed = document.getElementById('red');
const paletteYellow = document.querySelector('#yellow');
const paletteGreen = document.querySelector('#green');
let selectedColor = 'blue';

paletteBlue.addEventListener('click', function() {
    selectedColor = 'blue'
    //console.log(selectedColor)     
})

paletteRed.addEventListener('click', function() {
    selectedColor = 'red'
    //console.log(selectedColor)
})

paletteYellow.addEventListener('click', function() {
    selectedColor = 'yellow'
    //console.log(selectedColor)
})

paletteGreen.addEventListener('click', function () {
    selectedColor = 'green'
    //console.log(selectedColor)
})

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})