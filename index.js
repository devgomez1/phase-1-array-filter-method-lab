// Code your solution here
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(array, name) {
  const filteredArray = array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
  return filteredArray;
}

// function fuzzyMatch(array, firstLetter) {
//   return array.filter((array) => array.startsWith(firstLetter));
// }

function fuzzyMatch(array, firstLetter) {
  const filteredArray = array.filter(function (driverName) {
    return driverName.startsWith(firstLetter);
  });
  return filteredArray;
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
