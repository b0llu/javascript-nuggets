const menu = [
  {
    name: "samosa",
    category: "snacks",
  },
  {
    name: "idli",
    category: "dinner",
  },
  {
    name: "Bhakri",
    category: "lunch",
  },
  {
    name: "rice",
    category: "dinner",
  },
  {
    name: "Vadapao",
    category: "snacks",
  },
  {
    name: "fish",
    category: "lunch",
  },
];

const food = new Set(
  menu.map((item) => {
    return ((item.category, item.name);
  })
);

console.log(food);
