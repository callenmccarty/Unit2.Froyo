    // Prompt user to input comma-separated froyo flavors
    let userInput = prompt("Enter a list of froyo flavors separated by commas (e.g., vanilla,strawberry,coffee):");

    // Split the input string into an array by commas
    let flavors = userInput.split(',').map(f => f.trim().toLowerCase());

    // Count the occurrences of each flavor
    let flavorCount = {};

    flavors.forEach(flavor => {
      if (flavorCount[flavor]) {
        flavorCount[flavor] += 1;
      } else {
        flavorCount[flavor] = 1;
      }
    });

    // Display the result in the console as a table
    console.table(flavorCount);
