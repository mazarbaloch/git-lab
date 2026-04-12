var users = [
  { name: "Alice", score: 12, active: true },
  { name: "Bob", score: 4, active: false },
  { name: "Charlie", score: 19, active: true },
  { name: "Diana", score: 7, active: true }
];

function getActiveUsers(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].active == true) {
      result.push(list[i]);
    }
  }
  return result;
}

function calculateAverageScore(list) {
  var total = 0;
  if (list.length == 0) {
    return 0;
  }

  for (var i = 0; i < list.length; i++) {
    total = total + list[i].score;
  }

  return total / list.length;
}

function printReport(list) {
  var activeUsers = getActiveUsers(list);
  var avg = calculateAverageScore(activeUsers);

  console.log("=== User Report ===");
  console.log("Total users: " + list.length);
  console.log("Active users: " + activeUsers.length);
  console.log("Average active score: " + avg);

  for (var i = 0; i < activeUsers.length; i++) {
    console.log(activeUsers[i].name + " -> " + activeUsers[i].score);
  }
}

function findUser(name) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == name) {
      return users[i];
    }
  }
  return null;
}

function updateScore(name, newScore) {
  var user = findUser(name);
  if (user != null) {
    user.score = newScore;
    return true;
  } else {
    return false;
  }
}

updateScore("Bob", 10);
printReport(users);