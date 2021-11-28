const people = [
  {
    name: "bob",
    age: 20,
    position: "devloper",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

const names = people.map((item) => `<h2>${item.name}<h2>`);

const result = document.querySelector("#result");

result.innerHTML = names.join("");
