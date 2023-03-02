anwser = prompt("Choisis le nombre d'étage")
// div = document.querySelector('.pyramide')
count_up= 0
num = Number(anwser)
function pyramide(num){
  for(let count = num; count >= 0; count--){
    hashtag="#"
    space=" "
    if(count > 0){
      console.log(space.repeat(count-1),hashtag.repeat(count_up ))
    } 
    else
    {console.log(hashtag.repeat(count_up ))
    }
    count_up++
  }
}
pyramide(num)
