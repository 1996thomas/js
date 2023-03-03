const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];
let buttonSeventies = document.querySelector('#seventies');

function seventies() {
  entrepreneurs.forEach((i) => {
    if (i.year >= 1970 && i.year <= 1980) {
      list = (`${i.first} ${i.last} est né dans les années 70`);
      return
    }
  });
}

function array_names() {
  array = [];
  entrepreneurs.forEach((i) => {
    array.push(i.last.concat(" " + i.first));
    return;
  });
  console.log(array);
}

function age() {
  entrepreneurs.forEach((i) => {
    console.log(i.first, i.last, "aurait", 2023 - i.year, "ans aujourd'hui");
  });
}

function sortBy() {
  last_name = [];
  entrepreneurs.forEach((i) => {
    last_name.push(i.last);
  });
  console.log(last_name.sort());
}


// buttonSeventies.addEventListener("click", function() {
//   document.querySelector(".content").innerHTML = seventies()
// })

array_names();
seventies();
age();
sortBy();
