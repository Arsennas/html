let number = document.getElementById('number')
let number2 = document.getElementById('number2')
let block = document.getElementById('block')
document.body.onkeydown = (e) => {
  console.log(e.keyCode)
  if(e.keyCode === 48 || e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 53 || e.keyCode === 54 || e.keyCode === 55 || e.keyCode === 56 || e.keyCode === 57 || e.keyCode === 58){
    number.innerText += e.key;
    number2.innerText = (+e.key) +
    (+number2.innerText)
  }
}
let x = 10;
let y = 10
document.body.onkeydown = (e) => {
console.log(e.keyCode)
  if( e.keyCode === 37 ){
    x-=10
    block.style.left = `${x}px`
  }else if(e.keyCode === 40){
    y+=10
    block.style.top = `${y}px`
  }else if(e.keyCode === 39){
    x+=10
    block.style.left = `${x}px`
  }else if(e.keyCode === 38){
    y-=10
    block.style.top = `${y}px`
  }
  }

