let my_variable = "Hello Maoulid.....";
console.log(my_variable);
let total = 0;
total += 1;
total++;

console.log(total);
// print(total);
let tableau = ["maoulid", 30, true, 55.5];
console.log(tableau);
// In JS le symbol (==) teste l'egalite de valeur sans prendre en compte le type
let x = 132;
let y = "132";
if (x === y) {
  alert("ils sont egaux");
} else if (x > y) {
  alert("X est plus grand");
} else if (y > x) {
  alert("Y est plus grand");
} else {
  alert("type de variable sont pas egaux....");
}
// Function classique
function faireQuelqueChose() {
  console.log("je fais un truc...");
  console.log(5 + 6);
  alert("calcule termine!");
}
faireQuelqueChose();

// function flechee
const addition = (a, b) => {
  console.log(a + b);
};
addition(45, 56);

// object
let dict = { 101: "maoulid", 102: "mack" };
