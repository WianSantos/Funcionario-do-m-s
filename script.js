
// display card
const showCardBtn = document.getElementById('show-card-btn');
const closeBtn = document.getElementById('close-btn');
const cardContainer = document.getElementById('card-container');

showCardBtn.addEventListener('click', function() {
  cardContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  cardContainer.style.display = 'none';
});



// função para atualizar a informação
function atualizarInfo(){

//Verificar o valor de cada select.
//Sistemas
let valorSistemas = document.querySelector('.select1')

console.log(valorSistemas)

let valorSi = valorSistemas.options[valorSistemas.selectedIndex].value
let textSi = valorSistemas.options[valorSistemas.selectedIndex].text

console.log(valorSi, textSi)

//Governaca

let valorGovernaca = document.querySelector('.select2')

console.log(valorGovernaca)

let valorGove = valorGovernaca.options[valorGovernaca.selectedIndex].value
let textGove = valorGovernaca.options[valorGovernaca.selectedIndex].text

console.log(valorGove, textGove)

//adm
let valorAdm = document.querySelector('.select3')

console.log(valorAdm)

let valorAd = valorAdm.options[valorAdm.selectedIndex].value
let textAd = valorAdm.options[valorAdm.selectedIndex].text

console.log(valorAd, textAd)



//^^ Fim da verificação


//realiza a troca a cada x minutos

let variavelNome = document.querySelector('.nomeDoColab')

let trocaDeNome = variavelNome.innerText = textSi

console.log(trocaDeNome)
console.log(variavelNome)

trocaDeNome = variavelNome.innerText = textAd

console.log(trocaDeNome)
console.log(variavelNome)

//^^Finaliza a troca.

// Declare the variables
trocaDeNome = [textSi, textAd, textGove]
let intervalTime = 0.05 * 60 * 1000; // 3 minutes in milliseconds
let originalText = trocaDeNome[0]; // save the original text value
let loopCount = 0; // initialize loop count
let valorNovo =''
let equipe = document.querySelector('.equipe')
let imagem = document.querySelector('.imagemTrocada')

// Function to change the value of the text variable
function changeText() {
  loopCount++;
  if (loopCount % trocaDeNome.length === 0) {
    text = originalText;
    console.log("Text reset to: " + text);
    valorNovo = text
    console.log(valorNovo)
    console.log(imagem)
    // insira o if de mudança de nome aqui 
    if (valorNovo === 'Erick'){
      equipe.innerText = 'Administrativo'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    } else if((valorNovo === 'Lu')){
      equipe.innerText = 'Governança'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    } else if((valorNovo === 'Wian')){
      equipe.innerText = 'Sistemas'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    }
    //Finalização do if de mudança de nome
 
  } else {
    text = trocaDeNome[loopCount % trocaDeNome.length];
    console.log("Text changed to: " + text); 
    valorNovo = text
    console.log(valorNovo)
    console.log(imagem)
    // insira o if de mudança de nome aqui 
    if (valorNovo === 'Erick'){
      equipe.innerText = 'Administrativo'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    } else if((valorNovo === 'Lu')){
      equipe.innerText = 'Governança'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    } else if((valorNovo === 'Wian')){
      equipe.innerText = 'Sistemas'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/imagens/${valorNovo}.jpg`
    }
    //Finalização do if de mudança de nome
  }
}

// Set an interval to call the changeText function every 3 minutes
let interval = setInterval(changeText, intervalTime);

// Set a timeout to stop the loop after 10 minutes
let timeout = setTimeout(function() {
  clearInterval(interval);
  console.log("Loop stopped");
  // Change the text variable again
  originalText = trocaDeNome[0];
  loopCount = 0;
  interval = setInterval(changeText, intervalTime);
}, 0.30 * 60 * 1000); // 10 minutes in milliseconds







//
//Realizar a troca de acordo com a informação do nome
//console.log(equipe)

if (valorNovo === 'Erick'){
  equipe.innerText = 'Administrativo'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/imagens/${valorNovo}.jpg`
} else if((valorNovo === 'Lu')){
  equipe.innerText = 'Governança'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/imagens/${valorNovo}.jpg`
} else if((valorNovo === 'Wian')){
  equipe.innerText = 'Sistemas'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/imagens/${valorNovo}.jpg`
}

else{
  console.log('opa')
}

}



//function attTela(){
//  let variavelNome = document.querySelector('.nome')
//  
//}






























/*var select1 = document.querySelector(".select1");
var select2 = document.querySelector(".select2");
var select3 = document.querySelector(".select3");

// select the <div> elements where the answers will be displayed
var answerDiv1 = document.querySelector(".answer1");
var answerDiv2 = document.querySelector(".answer2");
var answerDiv3 = document.querySelector(".answer3");

// add an event listener to each <select> element
select1.addEventListener("change", updateAnswers);
select2.addEventListener("change", updateAnswers);
select3.addEventListener("change", updateAnswers);

// function to update the answers based on the selected values
function updateAnswers() {
  // get the selected values from the <select> elements
  var selectedOption1 = select1.value;
  var selectedOption2 = select2.value;
  var selectedOption3 = select3.value;

  // display the answers in the <div> elements based on the selected values
  if (selectedOption1 === "option1" && selectedOption2 === "option2" && selectedOption3 === "option3") {
    answerDiv1.innerHTML = "You selected Option 1.";
    answerDiv2.innerHTML = "You selected Option 2.";
    answerDiv3.innerHTML = "You selected Option 3.";
  } else if (selectedOption1 === "option2" && selectedOption2 === "option3" && selectedOption3 === "option1") {
    answerDiv1.innerHTML = "You selected Option 2.";
    answerDiv2.innerHTML = "You selected Option 3.";
    answerDiv3.innerHTML = "You selected Option 1.";
  } else if (selectedOption1 === "option3" && selectedOption2 === "option1" && selectedOption3 === "option2") {
    answerDiv1.innerHTML = "You selected Option 3.";
    answerDiv2.innerHTML = "You selected Option 1.";
    answerDiv3.innerHTML = "You selected Option 2.";
  } else {
    answerDiv1.innerHTML = ""; // if no options are selected, clear the answers
    answerDiv2.innerHTML = "";
    answerDiv3.innerHTML = "";
  }
}

*/

//let select = document.querySelector('#sec')
//
//console.log(select)
//
//let value = select.options[select.selectedIndex].value
//let text = select.options[select.selectedIndex].text
//
//console.log(value, text)
//

//-------------------------------

//Governanca
//let valorGovernaca = document.querySelector('.select2')
//
//console.log(valorGovernaca)
//
//let valorGove = valorGovernaca.options[valorGovernaca.selectedIndex].value
//let textGove = valorGovernaca.options[valorGovernaca.selectedIndex].text
//
//console.log(valorGove, textGove)



////adm
//let valorAdm = document.querySelector('.select3')
//
//console.log(valorAdm)
//
//let valorAd = valorAdm.options[valorAdm.selectedIndex].value
//let textAd = valorAdm.options[valorAdm.selectedIndex].text
//
//console.log(valorAd, textAd)

