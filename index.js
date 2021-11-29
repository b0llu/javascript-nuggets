const udemy = "udemy";

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];

const newFriends = [...friends];
newFriends[0] = "nancy";
console.table(friends);
console.table(newFriends);

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "bob" };
console.log(newPerson);
