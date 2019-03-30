const colorbox = document.getElementsByClassName('color');


// this is to give a color the rectangle.
for (let i = 0; i < colorbox.length; i++) {
  colorNames = colorbox[i].nextElementSibling.innerHTML;
  colorbox[i].style.backgroundColor = colorNames;
  // console.log(colorbox[i].id)
}



//This is the console output code

// console.log(' Here are the rectangle\'s Id')
// function showId(value) {

//   setTimeout(function () {
 

//       console.log(colorbox[value].id)
    
    

//   }, value * 1000)
// }

// for (var i = 0; i < colorbox.length; i += 1) {
//   showId(i)
// }

// make the color change randomlly 

for(let j = 0; j < colorbox.length; j++){
  setTimeout(() =>{
    console.log(colorbox[j].id);
  },  j * 1000)
}