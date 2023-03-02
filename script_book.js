const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

function oneTime() {
  books.forEach((i) => {
    if (i.rented > 1) {
      console.log("oui");
    }
  });
}

function mostRented() {
  max = 0;
  maxTitle = " ";
  books.forEach((i) => {
    if (i.rented > max) {
      max = i.rented;
      maxTitle = i.title;
    }
  });
  console.log(maxTitle, "avec", max, "emprunts");
  return max
}

function leastRented() {
  min = mostRented();
  minTitle = " ";
  books.forEach((i) => {
    if (i.rented < min) {
      min = i.rented;
      minTitle = i.title;
    }
  });
  console.log(minTitle, "avec", min, "emprunts");
}

function finderId(){
  books.forEach((i) =>{
    if(i.id == 873495){
      console.log(i.title)
    }
  })
}

function deleteId(){
  return books.filter(function (i){
    i.id != 133712 
  }) 
}
function sortBy(){
  
  
}

oneTime();
mostRented();
leastRented();
finderId();
deleteId()
sortBy()
