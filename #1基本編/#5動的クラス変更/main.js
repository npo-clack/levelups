const colorPlace = document.getElementById("colorPlace");

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

redButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-red");
};

greenButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-green");
};

blueButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.add("color-blue");
};

/* ---------------*/
// 上級者向けの場合  //
/* ---------------*/

// redButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-red");
// }

// greenButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-green");
// }

// blueButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-blue);
// }
// redButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });

//   colorPlace.classList.add("color-red");
// }

/* ---------------*/
// 最上級者向けの場合  //
/* ---------------*/

// function changeColor(className) {
//   colorPlace.classList.forEach(function (className) {
//     if (className.startsWith("color")) {
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add(className);
// }

// redButton.onclick = function () {
//   changeColor("color-red");
// };
// greenButton.onclick = function () {
//   changeColor("color-green");
// };
// blueButton.onclick = function () {
//   changeColor("color-blue");
// };
