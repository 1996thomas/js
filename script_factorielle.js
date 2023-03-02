let anwser = prompt("Choisis un nombre");
let num = Number(anwser)
let div = document.querySelector('.result')
function factorielle(num){
  switch (true){
    case num < 0:
      return("Attention le chiffre doit être supérieur ou égal à 0")
    break
    case num == 0:
      return 1
    break
    case num > 0:
      return num * factorielle (num-1)
    break
  }
}

div.innerHTML += factorielle(num)