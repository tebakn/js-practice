function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
  }
  
  function look() {
    if (promptDirection("Which way?") == "L") {
      return "a house";
    } else {
      return "two angry bears";
    }
  }

for (;;) {
    try {
      let dir = promtDirection("Where?"); // ← typo!
      console.log("You chose ", dir);
      break;
    } catch (e) {
      console.log("Not a valid direction. Try again.");
    throw e;
    }
  }

