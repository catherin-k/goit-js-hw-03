const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let bestResult = 0;
  let bestEmployee = "";

  for (const employee in employees) {
    const employeeTasks = employees[employee];
    if (employeeTasks > bestResult) {
      bestResult = employeeTasks;
      bestEmployee = employee;
    }

    console.log(bestResult);
  }
  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

// VOVA

let maxTasks = 0;
//   let BestEmployee = "";
//   const keys = Object.keys(employees);
//   for (let key of keys) {
//     if (employees[key] > maxTasks) {
//       maxTasks = employees[key];
//       BestEmployee = key;
//     }
//   }
//   return BestEmployee;
