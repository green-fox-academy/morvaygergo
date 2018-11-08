'use strict';
export { };

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

let maxLength: number = 0;

for (let i = 0; i < ingredients.length; i++) {
  if (ingredients[i].name.length > maxLength) {
    maxLength = ingredients[i].name.length;
  };
};

let firstRow: string[] = [];
let table: string[] = [];

firstRow.push("+");
for (let i = 0; i < maxLength + 2; i++) {
  firstRow.push("-");
};
firstRow.push("+");
for (let i = 0; i < "Needs cooling".length + 2; i++) {
  firstRow.push("-");
};
firstRow.push("+");
for (let i = 0; i < "In stock".length + 2; i++) {
  firstRow.push("-");
};
firstRow.push("+\n");

table.push(firstRow.join(""));
table.push("| Ingredient         | Needs cooling | In stock |\n");
table.push(firstRow.join(""));

let bodyRow: any[] = ["| "];
let spaces: string[] = [];

for (let i = 0; i < ingredients.length; i++) {
  bodyRow.push(ingredients[i].name);
  for (let j = 0; j < maxLength - ingredients[i].name.length; j++) {
    spaces.push(" ");
  }
  bodyRow.push(spaces.join(""));
  spaces = [];
  bodyRow.push(" | ");
  ingredients[i].needsCooling ? bodyRow.push("Yes           | ") : bodyRow.push("No            | ");
  bodyRow.push(ingredients[i].inStock);
  bodyRow.push("        |\n");
  table.push(bodyRow.join(""));
  bodyRow = ["| "];
}

table.push(firstRow.join(""));

console.log(table.join(""));