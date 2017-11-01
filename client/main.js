// get the input content
// if input string length is more than 7, disable further input
// send a post request to server
// display received data below the the input
let getData = (selector) => {
  document.getElementById(selector)
}

getData("submit").click = () => {
  console.log('hey')
}

// let getWords = () => {
//   console.log("hello")
//   let input = getData("scrabble-input").value
//   getResult(input)
// }

// getData("submit").click = getWords

// let getResult = (input) => {
//   console.log("hello2")
//   let xhr = new XMLHttpRequest()
//   let url = "/submit"
//   let result = ''
//   xhr.onreadystatechange = () => {
//     const done = 4
//     const ok = 200
//     if(xhr.readyState === done) {
//       if(xhr.status === ok) {
//         result = JSON.parse(xhr.responseText)
//         displayResult(result)
//       } else {
//         console.log('error receiving data from server')
//       }
//     }
//   }
// }

// let displayResult = (result) => {
//   let para = document.createElement('p')
//   let text = document.createTextNode(result)
//   para.appendChild(text)
//   getData("result").appendChild(para)
// }